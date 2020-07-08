const index = require('./utils/index.js');
const config = require('./utils/config.js');

const authenticate  = index.authenticate;
const marketfeed = index.api.Api.marketfeed;
const orderRequest = index.api.Api.orderRequest;
const orderStatus = index.api.Api.orderStatus;
const userMargin = index.api.Api.userMargin;
const userOrderBook = index.api.Api.userOrderBook;

const express = require('express');
const { default: axios } = require('axios');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', async(req,res) => {
    let {email,Password,dob,password,appName,key,userId,} = req.body;
    dob = dob.replace(/-/g, '');
    config.clientEmail = email;
    config.clientPassword = Password;
    config.password = password;
    config.key = key;
    config.userId = userId;
    config.clientDob = dob;
    config.appName = appName;
    
    const result  = await authenticate();
    res.send(result);
})
 
app.post('/api/margin', async(req,res) => {
    res.send(await userMargin());
})

app.post('/api/watchlist', async(req,res) => {
    res.send(await marketfeed(req.body));
})

app.post('/api/holdings', async(req,res) => {
    res.send(await holdings());
})

app.post('/api/orderstatus', async(req,res) => {
    res.send(orderStatus(req.body));
})

app.post('/api/orderrequest', async(req,res) => {
    res.send(orderRequest(req.body));
})

app.post('/api/orderbook', async(req,res) => {
    res.send(userOrderBook());
})

app.listen(9000, () => {
    console.log('Listening!');
})

