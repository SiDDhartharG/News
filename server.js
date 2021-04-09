const express = require('express');
const session = require('express-session');
const news = require('./news');
const bodyParser = require('body-parser');
const router = require('./router');
const dotenv = require('dotenv')
dotenv.config()



const app = express();


app.set('view engine', 'ejs');


app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized:true
}));

app.use('/news' , router);
app.get('/' , (req , res)=>{
    res.redirect('/news');
});
app.get('/news' , async (req , res)=>{

    var headline = await news.getNews('' , 'in' , 20 );
    var business = await news.getNews('business' ,'in' , 6);
    var general  = await news.getNews('general' ,'in' , 6);
    var entertainment = await news.getNews('entertainment' ,'in' , 6);
    var health = await news.getNews('health' ,'in', 6);
    var science = await news.getNews('science' , 'in' , 6);
    var technology = await news.getNews('technology' ,'in' , 6);
    var sports = await news.getNews('sports' ,'in', 6);
    var world = await news.getNews('' ,'', 6);
    res.render("home" , {title : "trials" , 
                          user : req.session.user ,
                      headLine : headline , 
                      business : business,
                   entertainment:entertainment,
                         health:health,
                        science:science,
                     technology:technology,
                         sports:sports ,
                          world:world,
                        general:general});
});





//login
app.get('/login' , (req , res)=>{
    res.render('login', {title: "LogIn"});
});

app.get('/loginOut' , (req , res)=>{
    req.session.destroy((err)=>{
        console.log(err);
    });
    res.redirect('/');
});
//signin
app.get('/signin' , (req , res)=>{
    res.render('signin' , {title : "signin"});
})
app.listen(3000 )