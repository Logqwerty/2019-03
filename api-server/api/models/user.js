'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      cellPhone: {
        type: DataTypes.STRING(13),
      },
      profileImage: {
        type: DataTypes.STRING(2048),
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
      },
      isFacebook: {
        type: DataTypes.BOOLEAN,
      },
      isDeveloper: {
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {},
  );

  User.associate = function(models) {
    User.hasMany(models.Post);
    User.belongsToMany(models.Post, { through: 'PostLikes' });
    User.belongsToMany(models.Post, { through: 'UserTags' });
    User.belongsToMany(models.Post, { through: 'HashFollows' });
    User.belongsToMany(models.Post, { through: 'Replies' });
    User.belongsToMany(models.Reply, { through: 'ReplyLikes' });
  };

  return User;
};
