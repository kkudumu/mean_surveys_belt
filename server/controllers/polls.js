const mongoose = require('mongoose');
const Poll = mongoose.model('Poll');
const Option = mongoose.model('Option')

module.exports = {

    //gets all existing polls
    get: function (req, res) {
        Poll.find({}, (err, polls) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(polls);
        })
    },
  
    //create a new poll with each option as a separate variable bound to the newPoll id
    create: function (req, res) {
        var newPoll = new Poll({question: req.body.question, creator: req.body.creator});
        newPoll.save((err) => {
            if(err){
                console.log("Error saving poll.")
                return res.status(500).json(err);
            }
        });
        var newOptOne = new Option({option: req.body.polloptionone, likes: 0});
        newOptOne._poll = newPoll._id;
        newOptOne.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });
        var newOptTwo = new Option({option: req.body.polloptiontwo, likes: 0});
        newOptTwo._poll = newPoll._id;
        newOptTwo.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });

        var newOptThree = new Option({option: req.body.polloptionthree, likes: 0});
        newOptThree._poll = newPoll._id;
        newOptThree.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });
        var newOptFour = new Option({option: req.body.polloptionfour, likes: 0});
        newOptFour._poll = newPoll._id;
        newOptFour.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });
        return res.json("Success!")
    },


    //removes poll by ID
    delete: function (req, res) {
        Poll.remove({_id: req.params.id}, (err) => {
            if(err) {
                return res.status(500).json(err);
            }
        })
        return res.json("Poll deleted.")
    },

    //gets options associated with poll by ID
    getPollOptions: function (req, res) {
        Option.find({_poll: req.params.id}, (err, options) => {
            if(err) {
                return res.status(401).json(err);
            }
            return res.json(options);
        })
    },

    //grabs poll by ID
    getPoll: function (req, res) {
        Poll.findOne({_id: req.params.id}, (err, poll) => {
            if(err) {
                return res.status(401).json(err);
            }
            return res.json(poll);
        })
    },

    //finds option by ID and increments likes by 1
    pollVote: function (req, res) {
        Option.update({_id: req.body._id},{$inc: {likes: 1}}, (err) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json("User voted.")
        })
    },

    //finds option by ID
    getPollOption: function (req, res) {
        Option.findOne({_id: req.params.id}, (err, option) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(option)
        })
    }
 
}
