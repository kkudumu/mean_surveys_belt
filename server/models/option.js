const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create options for poll and bind to poll schema
const OptionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true,
        minLength: 4
    },
    likes:{
        type: Number,
        required: true,
        default: 0
    },
    _poll: {
        type: Schema.Types.ObjectId,
        ref: 'Poll'
    }
}, {timestamps: true})


const Option = mongoose.model('Option', OptionSchema)
