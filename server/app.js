const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.status(200).send('server stuff'));

// will make dynamic later
// most probably we only need /:listingId, then req. params will give us the value we want anyways
app.get('/:listingid/1', (req, res) => {

    //make connection to database; query all listings with the above specific request params
    //res.send data from database back to client populating client side
});

module.exports = app;
