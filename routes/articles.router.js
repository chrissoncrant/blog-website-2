const express = require('express');
const articleRouter = express.Router();

articleRouter.get('/',(req, res) => {
    res.send('In Articles');
})

module.exports = articleRouter