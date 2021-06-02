const { DataTypes } = require('sequelize');

const connection = require('../db/connection');

const statusModel = connection.define(
    'users',
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        roles_id: DataTypes.INTEGER
    },
    { timestamps: false }
);

module.exports = statusModel;