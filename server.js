const express = require('express');
const path = require('path');
const articleRouter = require('./routes/articles.router');

const PORT = 5000;
const app = express();

const articles = [
    {
        title: "First Blog Post", 
        date: new Date(Date.now()).toString(),
        description: 'Just testing things out yo.',
        body: 'Lots of writing goes here because this is what it is all about. \r\rWriting writing writing on the wall of the cafeteria with the gravy from the mashed potatoes that I didn\'t pour on becuase I like \' em plain. \r\rWhat I wrote isn\'t so important, though it did change a few people\'s lives. \r\rI know this because they told me: "Dude, your gravy written message changed me." And I was like "Cool, man or honey (depending on who told me)." \r\rAnd that\'s the end of this crazy story.'
    }
]

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    res.render('index', { articles: articles });
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})