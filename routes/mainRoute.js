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
    .select('email')
    .then(docs => {
        res.status(200).json({
            message: 'All the subsicribers',
            count: docs.length,
            result: docs
        })
    })
    .catch(err => {
        res.status(404).json({
            message: "Error was found",
            error: err
        })
    })
})

router.get('/subs/:id', (req,res) => {
    const id = req.params.id;

    Sub.findByIdAndDelete(id)
        .then( result => {
            res.status(200).json({
                message: "The sub is deleted successfully"
            });
        })
        .catch( err => {
            console.log(err);
        })
})





module.exports = router;