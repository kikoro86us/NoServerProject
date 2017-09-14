require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require ('cors'),
      passport = require('passport'),
      app = express(),
      Auth0Strategy = require('passport-auth0'),
      session = require('express-session');

      app.use(bodyParser.json());
      
      app.use(session({
          secret: 'password',
          resave:false,
          saveUninitialized: true
      }))
      
      app.use(passport.initialize());
      app.use(passport.session());
      
      
      passport.use(new Auth0Strategy({
          domain: process.env.AUTH_DOMAIN,
          clientID: process.env.AUTH_CLIENT_ID,
          clientSecret: process.env.AUTH_CLIENT_SECRET,
          callbackURL: process.env.AUTH_CALLBACK
        }, function(accessToken, refreshToken, extraParams, profile, done) {
      
          console.log(profile);
          
          done(null, profile);
      
      }));
      
      app.get('/auth', passport.authenticate('auth0'));
      
      app.get('/auth/callback', passport.authenticate('auth0', {
          successRedirect: 'http://localhost:3000/',
          failureRedirect: 'http://localhost:3000/'
        }))
      
      
      passport.serializeUser(function(user, done){
          done(null, user);
      });
      
      passport.deserializeUser(function(obj, done){
          done(null, obj);
      });
      
      app.get('/auth/me', (req, res, next) => {
          if (!req.user) {
            return res.status(404).send('User not found');
          } else {
            return res.status(200).send(req.user);
          }
        })
      
        app.get('/auth/logout', (req, res) => {
          req.logOut();
          return res.redirect(302, 'http://localhost:3000/#/');
        })





const port = 3040;
      app.listen(port, () =>{
          console.log(`Listening on port😳 😳 😳 😳 : ${port}`);
      })