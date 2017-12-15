const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create poll w/ author and bind to options schema
const PollSchema = new mongoose.Schema({
	question: {
		type: String,
        minLength: 8,
		required: true
	},
    _options: [{
        type: Schema.Types.ObjectId,
        ref: 'Option',
    }],
    creator: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Poll = mongoose.model('Poll', PollSchema)
