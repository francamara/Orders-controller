const orderModel = require('../models/order');
const statusModel = require('../models/status');

const dateHeleper = require('../helpers/date');

class OrderController {
    static async create(req, res) {
        try {
            const { user_id: userId } = req.body;
            const total = 0;
            const date = dateHeleper.getDate();
            const statusAwait = await statusModel.findOne({ where: { name: 'await' } });
            const orderCreated = await orderModel.create({ users_id: userId, status_id: statusAwait.id, total, date });
            return res.status(201).json({ message: `order ${orderCreated.id} created` });
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear una orden' });
        }
    }

    static async getOrderById(req, res) {
        const { id } = req.params;
        try {
            const order = await orderModel.findOne(
                {
                    attributes: {
                        exclude: ['status_id', 'users_id']
                    },
                    where: { id },
                    include: [
                        'status',
                        'user'
                    ]
                }
            );
            if (!order) {
                return res.status(404).json({ message: 'orden no encontrada' });
            }
            return res.json(order);
        } catch (error) {
            return res.status(500).json(error);
        }

    }
}

module.exports = OrderController;