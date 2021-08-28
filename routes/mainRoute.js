const mongoose  = require('mongoose');
const express   = require('express');
const Sub       = require('../models/subs')

const router = express.Router()

router.get('', (req,res) => {
    res.status(200).render('index')
})

router.post('' , (req,res) => {
    const sub = new Sub(req.body);
    sub.save()
        .then(result => res.redirect(''))
        .catch(err => console.log(err))
})

router.get('/subs', (req,res) => {
    Sub.find()
    .then(result => {
        res.status(200).json({
            message: 'All the subsicribers',
            result: result
        })
    })
    .catch(err => {
        res.status(404).json({
            message: "Error was found",
            error: err
        })
    })
})



module.exports = router;