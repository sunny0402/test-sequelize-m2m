module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("roles", {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Role;
};
