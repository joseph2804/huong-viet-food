'use strict';

var express = require('express');
var server = express.Router();
//var productHelper = require('../scripts/ProductHelper');

server.get('/', function(req, res, next) {
    res.render('contact');
});

module.exports = server;