const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//To prevent CORS errors
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Routes
const moviesRoute = require('./api/routes/movies');


//Connecting to DB
mongoose.connect(`mongodb+srv://orifmilod:${process.env.MONGO_PASS}@cluster0-nlqzl.mongodb.net/test?retryWrites=true&w=majority`,  { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => console.log("Mongo Database is connected now!"));
db.on('error', console.error.bind(console, 'connection error:'));


app.use('/api/movies', moviesRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))