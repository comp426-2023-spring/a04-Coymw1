#!/usr/bin/env node

import { rps, rpsls } from './lib/rpsls.js';
import express from 'express';
import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));
var app = express();
const port = argv.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//just returns 200 OK
app.get('/app', (req, res)=>{
    res.status(200).send("200 OK");
});

//404 for undefined endpoints
app.get('*', (req, res)=> {
    res.status(404).send('404 NOT FOUND');
});

//endpoint for rps
app.get('/app/rps', (req, res) =>{
    res.status(200).send(JSON.stringify(rps()));
});

//endpoint for rpsls
app.get('/app/rpsls', (req, res) =>{
    res.status(200).send(JSON.stringify(rpsls()));
});

//rps with user input
app.get('/app/rps/play/', (req, res)=>{
    res.status(200).send(rps(req.query.shot));
});

//rpsls with user input
app.get('/app/rpsls/play/', (req, res)=>{
    res.status(200).send(rpsls(req.query.shot));
});

//post to send data for rps
app.post('/app/rps/play/', (req, res)=>{
    res.status(200).send(rps(req.body.shot));
});

//post to send data for rpsls
app.post('/app/rpsls/play/', (req, res)=>{
    res.status(200).send(rpsls(req.body.shot));
});

//rps wiht data from url
app.get('/app/rps/play/:shot/', (req, res)=>{
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
});

//rpsls with data from URL
app.get('/app/rpsls/play/:shot/', (req, res)=>{
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

//Start server, listen to port || 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});