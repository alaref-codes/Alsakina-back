const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({          
    email: {
        type: String,
        match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
})

const Subs = mongoose.model('Sub' , subSchema)

module.exports = Subs;