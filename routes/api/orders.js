const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../../models/Order');


const validateOrdersInput = require('../../validation/orders');

//@route Get api/profile/test
//@desc Tests orders rout
//@access Public
router.get('/test', (req, res) => res.json({ msg: "orders Works" }));

//@route Post api/orders/order
//@desc Tests orders rout
//@access Public
router.post('/order', (req, res) => {
    const { errors, isValid } = validateOrdersInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    } else {
        const newOrder = new Order({
            name: req.body.name,
            phone: req.body.phone,
            time: req.body.time,
            date: req.body.date,
            person: req.body.person

        });
        newOrder
            .save()
            .then(order => res.json(order))
            .catch(err => console.log(err));
    }

});
//@route GET api/orders/all
//@desc Tests orders rout
//@access Public


router.get('/all', (req, res) => {
    const errors = {};

    Order.find()
        .then(orders => {
            if (!orders) {
                errors.noorders = 'There are no orders';
                return res.status(404).json(errors);
            }

            res.json(orders);
        })
        .catch(err => res.status(404).json({ order: 'There are no orders' }));
});


//@route GET api/orders/order/:id
//@desc Get post by id
//@access Public



router.get('/order/:id', (req, res) => {

    Order.findById(req.params.id)


        .then(order => res.json(order))
        .catch(err => res.status(404).json({ noorder: 'No order found with that ID' }));
});




//@route Delete api/orders/:id
//@desc Delete post by id
//@access Public

router.delete('/:id', (req, res) => {

    Order.deleteOne({ _id: req.params.id })
        .then(res.json({ success: true }))
        .catch(err => res.status(404).json({ msg: 'Can not delete oreder' }))

});

//@route Post api/orders/order/:id
//@desc Update by id 
//@access Public

router.post('/order/:id', (req, res) => {
    const { errors, isValid } = validateOrdersInput(req.body);
    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    } else {
        Order.findById(req.params.id, (err, order) => {

            if (err) {
                res.json(err)
            } else {
                order.name = req.body.name,
                    order.phone = req.body.phone,
                    order.time = req.body.time,
                    order.date = req.body.date,
                    order.person = req.body.person
                order.save((err, data) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(data)
                    }
                });


            }
        })
    }
})


module.exports = router;