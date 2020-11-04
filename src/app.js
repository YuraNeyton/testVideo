const express = require('express');
const cv = require('opencv4nodejs');


const app = express();

app.use('/', (req, res, next) => {

    res.end();
})

app.listen(3300, () => {
    console.log('port: 3300 listening...');
})
