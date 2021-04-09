var express = require('express');
const news = require('./news');
const mongoose = require('./dbms')
const User = require('./userSchema')
var router = express.Router();


router.post('/login', (req, res) => {

    User.findOne({ _email: req.body.email, _password: req.body.password }).then((result) => {
        if (result.length == 0) {
            return res.send("incorrect")
        }
        req.session.user = req.body.email;
        res.redirect('/news');
    })
});
router.post('/signin', async (req, res) => {
    var emailFound = false;
    const user = await User.findOne({ _email: req.body.email })
    if(user){return;}


    var newUser = new User();
    newUser._userName = req.body.userName;
    newUser._email = req.body.email;
    newUser._password = req.body.password;
    newUser.save(function(err , savedUser){
        if(err){
            console.log(err);
            return res.send('err');
        }
        req.session.user = req.body.email;
        res.redirect('/news');
    });

});

//NEWS
router.post('/search', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getSearchNews(req.body.query , req.body.category, req.body.country, 30);
   
    res.render("searchNews", {
        title: "business",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/business', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('business', 'in', 30);
    res.render("categoryNews", {
        title: "business",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/entertainment', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('entertainment', 'in', 30);
    res.render("categoryNews", {
        title: "entertainment",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/general', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('general', 'in', 30);
    res.render("categoryNews", {
        title: "general",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/health', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('health', 'in', 30);
    res.render("categoryNews", {
        title: "health",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/science', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('science', 'in', 30);
    res.render("categoryNews", {
        title: "science",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/sport', async (req, res) => {
    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('sports', 'in', 30);
    res.render("categoryNews", {
        title: "Sports",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });


});
router.get('/technology', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('technology', 'in', 30);
    res.render("categoryNews", {
        title: "technology",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/general', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('general', 'in', 30);
    res.render("categoryNews", {
        title: "general",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
router.get('/World', async (req, res) => {

    var headline = await news.getNews('', 'in', 10);
    var categorizedNews = await news.getNews('', '', 30);
    res.render("categoryNews", {
        title: "World",
        user: req.session.user,
        headLine: headline,
        categorizedNews: categorizedNews
    });
});
module.exports = router;