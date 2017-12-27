import config from './config'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Server from './routes/server';
import Auth from './routes/auth';

import './database';

const server = express();
server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended:true}));
// server.use(bodyParser.json);
server.set('view-engine','ejs');

server.use('/sr',Server);
server.use('/sauth', Auth);

server.get("/ejs", (req, res)=>{
   res.render('index.ejs', {config: config.PORT})
});

server.listen(config.PORT, (err)=>{
    console.log (err?err:`Server is listening on port: ${config.PORT}`)
});