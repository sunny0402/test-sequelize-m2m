const db = require("./models");
const UserController = require("./controller/user.controller");
const RoleController = require("./controller/role.controller");
const run = async () => {
  // 1. Create users ...
  const user1 = await UserController.create({
    username: "Alex1",
    password: "1234",
  });
  const user2 = await UserController.create({
    username: "Alex2",
    password: "12345",
  });
  const user3 = await UserController.create({
    username: "Alex3",
    password: "123456",
  });

  //2. Create roles ...   // const ROLES_LIST = {Admin: 5150,Editor: 1984,User: 2001};
  const userRole = await RoleController.create({
    name: "User",
    role_id: 2001,
  });

  const editorRole = await RoleController.create({
    name: "Editor",
    role_id: 1984,
  });

  const adminRole = await RoleController.create({
    name: "Admin",
    role_id: 5150,
  });

  //3. Add users to roles ... addUser (roleId, userId)
  // const ROLES_LIST = {Admin: 5150,Editor: 1984,User: 2001};
  await RoleController.addUser(2001, user1.id);
  await RoleController.addUser(2001, user2.id); // user 2 also an editor, seperate row
  await RoleController.addUser(1984, user2.id);
  await RoleController.addUser(5150, user3.id);

  //4. Show role (including users) by id
  const allUsers2001 = await RoleController.findById(2001);
  console.log(
    "printing ... allUsers2001: ",
    JSON.stringify(allUsers2001, null, 2)
  );

  //5. Show all roles
  const allRoles = await RoleController.findAll();
  console.log("printing ... allRoles", JSON.stringify(allRoles, null, 2));

  //6. Show user (including role) by id
  const user2Info = await UserController.findById(user2.id);
  console.log("printing ... user2Info", JSON.stringify(user2Info, null, 2));

  //7.Show all users
  const allUsersInDB = await UserController.findAll();
  console.log(
    "printing ... allUsersInDB",
    JSON.stringify(allUsersInDB, null, 2)
  );
}; //end of asyn run()

// simply db.sequelize.sync(); for production
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
