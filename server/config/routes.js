const users = require('./../controllers/users.js');
const polls = require('./../controllers/polls.js');
const path = require('path');

module.exports = function (app) {
    //route for logging in user
    app.post('/api/users', users.login);
    
     //gets ID of user after we store it when they log in
     app.get('/api/users/new', users.getID);

     //route for logging out user
     app.get('/api/users/logout', users.logout);
     
     //route for creating new poll
     app.post('/api/polls', polls.create);
     
     //gets all polls
     app.get('/api/polls', polls.get);
 
     //deletes poll by id
     app.delete('/api/polls/:id', polls.delete);
 
     //get all of a poll options by id
     app.get('/api/options/:id', polls.getPollOptions);
 
     //grab a poll by id
     app.get('/api/polls/:id', polls.getPoll);
     
     //route to allow voting on poll option
     app.put('/api/options', polls.pollVote);
     
     //get an option from a poll by id
     app.get('/api/options/new/:id', polls.getPollOption)
     
     //connects back end to front end
     app.all("*", (req, res, next) => {
         res.sendFile(path.resolve("./public/dist/index.html"));
     })
	

};
