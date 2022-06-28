const express = require('express');
const articleRouter = express.Router();

articleRouter.post('/', (req, res) => {

})

articleRouter.get('/new',(req, res) => {
    res.render('articles/new')
})


module.exports = articleRouter