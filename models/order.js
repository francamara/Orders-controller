const { DataTypes } = require('sequelize');

const connection = require('../db/connection');

const statusModel = require('./status');
const userModel = require('./user');

const orderModel = connection.define(
    'orders',
    {
        date: DataTypes.DATE,
        total: DataTypes.DOUBLE,
        status_id: DataTypes.INTEGER,
        users_id: DataTypes.INTEGER
    },
    { timestamps: false }
);

orderModel.belongsTo(statusModel,
    {
        as: 'status',
        foreignKey: 'status_id'
    }
);

orderModel.belongsTo(userModel,
    {
        as: 'user',
        foreignKey: 'users_id'
    }
);

module.exports = orderModel;