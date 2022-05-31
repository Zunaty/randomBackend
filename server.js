// Importing express and mongoose
const express = require('express');
const mongoose = require('mongoose');

// Setting up for for local machine and server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/randomBackend', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.use(require('./routes'));

// Shows port that is connected
app.listen(PORT, () => console.log(`Connected: ${PORT}`));