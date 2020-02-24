
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const MONGO_USERNAME = 'interativachat2019';
const MONGO_PASSWORD = 'interativachat2019';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'magistv';
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

// Connect to MongoDB

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true  });
mongoose.connection.once('open', function(){
  console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});