const mongoose = require('mongoose');



//we only need the name for login on this app
const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required: true
    }
})
const User = mongoose.model('User', UserSchema)