//Create and Save new User
const db = require("../models");
const User = db.User;
const Role = db.Role;

exports.create = (new_user) => {
  return User.create({
    username: new_user.username,
    password: new_user.password,
  })
    .then((result) => {
      console.log(">> Created User: " + JSON.stringify(result, null, 4));
      return result;
    })
    .catch((err) => {
      console.log(">> Error while creating User: ", err);
    });
};

//Retrieve all Users

exports.findAll = () => {
  return User.findAll({
    include: [
      {
        model: Role,
        as: "roles",
        attributes: ["role_name", "role_id"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["role_id", "user_id"],
        // },
      },
    ],
  })
    .then((all_users) => {
      return all_users;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Users: ", err);
    });
};

//Get the User for a given user id

exports.findById = (id) => {
  return User.findByPk(id, {
    include: [
      {
        model: Role,
        as: "roles",
        attributes: ["role_name", "role_id"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["role_id", "user_id"],
        // },
      },
    ],
  })
    .then((found_user) => {
      return found_user;
    })
    .catch((err) => {
      console.log(">> Error while finding User: ", err);
    });
};
