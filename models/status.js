const { DataTypes } = require('sequelize');

const connection = require('../db/connection');

const statusModel = connection.define(
    'status',
    {
        name: DataTypes.STRING
    },
    { timestamps: false, freezeTableName: true }
);

module.exports = statusModel;