const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;
const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(cookieParser('secreto'));

app.use(cookieParser({
    secret: 'secreto',
    resave: true,
    saveUnitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new PassportLocal(function(email,password,done){
    if(email === "joni.capogrosso@outlook.com" && password === "38997200")
        return done(null,{ id:1, name:"Jonathan"});

    done(null,false);
}));

passport.serializeUser(function(user,done){
    done(null,user.id);
})

passport.serializeUser(function(id,done){
   done(null, {id:1, name:"Jonathan"});
})


app.set('view engine', 'ejs');

app.get("/", (req,res,next) =>{
    if(req.isAuthenticated()) return next();
    res.redirect("/login");
} ,(req,res) =>{
    //si ya iniciamos mostrar bienvenida

    //si no hemos iniciado sesion redireccionar al login
    res.send('hola');
})

app.get("/login", (req,res) =>{
    //mostrar formulario de login
    res.render("login");
})

app.get("/login", passport.authenticate('local',{

    successRedirect: "/",
    failureReditect: "/login"
}))