'use strict';

var Twitter = require('twitter-node-client').Twitter;
var config = require('../config');

//Callback functions
var error = function (err, response, body) {
	if (err) {
		console.log("Error: " + JSON.stringify(err));
	}
};


var twitter = new Twitter(config);

module.exports = {

	getBySearch: (req, res) => {

		twitter.getSearch({
			'q': 'onixjs',
			count: '10'
		}, (err => {
			// case for Error message
			res.status(400).json(err)
		}), (success => {
			// case for success
			res.status(200).json(JSON.parse(success));
		}));
	},

	getTimeline: (req, res) => {
		twitter.getUserTimeline({
			screen_name: req.query.name,
			count: '10'
		}, (err => {
			// case for Error message
			res.status(400).json(err)
		}), (success => {
			// case for success
			console.log(JSON.parse(success))
			res.status(200).json(JSON.parse(success));
		}));
	},

	getUserInfo: (req, res) => {
		twitter.getUser({
			screen_name: req.query.name,
		}, (err => {
			// case for Error message
			res.status(400).json(err)
		}), (success => {
			// case for success
			console.log(JSON.parse(success))
			res.status(200).json(JSON.parse(success));
		}));
	}
};