const request = require('request');

const baseURL = "http://users:9091";

var users = {

    load: (req, res, next) => {
        request(baseURL + '/load',
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    //response = JSON.parse(body);
                    //res.send(response);
                    res.send(body);
                } else {
                    console.log(error);
                    res.send({
                        message: "An error occured"
                    });
                }
            });
    }
};

module.exports = users;