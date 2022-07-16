'use strict';

const properties = require('../../package.json');
const registry = require('../service/registry');
const users = require('../service/users');

var controllers = {
    about: (req, res) => {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
        }
        res.json(aboutInfo);
    },

    getDistance: (req, res) => {
        registry.getDistance(req, res, (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },

    aboutDistance: (req, res) => {
        registry.about(req, res, (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },

    loadDB: (req, res) => {
        users.load(req, res, (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};

module.exports = controllers;