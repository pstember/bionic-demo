const request = require('request');

const baseURL = "http://distance:8081";

var registry = {
    about: (req, res, next) => {
        request(baseURL + '/about',
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(error);
                    res.send({
                        message: "An error occured"
                    });
                }
            });
    },

    getDistance: (req, res, next) => {
        request(baseURL + '/distance/' + req.params.zipcode1 + '/' + req.params.zipcode2,
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(error);
                    res.send({
                        message: "An error occured"
                    });
                }
            });
    }
};

module.exports = registry;