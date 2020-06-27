const { default: axios } = require('axios')
const config = require('../config.js')
const Const = require('./const')

module.exports = async (data) => {
  let headers = {
    'content-type': 'application/json'
  }

  var res = {};

  let request = {
    Method: "MarketFeedV3",   
    Operation:"Subscribe",
    ClientCode: config.clientCode,
    MarketFeedData:[ 
      { 
      Exch:"N",
      ExchType:"C",
      ScripCode:15083
      }
      ]
  }
  request = Object.assign(request,data);

  var websocket = new WebSocket(config.api.marketFeeds.url);
  websocket.onopen = function (event) {
    websocket.send(JSON.stringify(request));
  }
  websocket.onmessage = function(event) {
    res = JSON.parse(event.data);
  }
  return res;
}
