const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.resolve(`${__dirname}`, 'public')));

app.listen(3004, () => console.log('Listening on port 3004'));
app.get('/', (req, res) => res.send());

