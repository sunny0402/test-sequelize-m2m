const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  // operatorsAliases: false,
  // pool: {
  //   max: config.pool.max,
  //   min: config.pool.min,
  //   acquire: config.pool.acquire,
  //   idle: config.pool.idle,
  // },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model.js")(sequelize, Sequelize);
db.Role = require("./role.model.js")(sequelize, Sequelize);

db.User.belongsToMany(db.Role, {
  through: "user_role", //through/junctipm table
  as: "roles",
  foreignKey: "user_id",
});

db.Role.belongsToMany(db.User, {
  through: "user_role",
  as: "users",
  foreignKey: "role_id",
});

module.exports = db;
