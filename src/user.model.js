const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
                type: DataTypes.INTEGER,
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: 'users',
        }
    );
    return User;
}