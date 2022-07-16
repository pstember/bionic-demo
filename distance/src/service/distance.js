const request = require('request');

var distance = {
    find: (req, res, next) => {
        response = {
            from: req.params.zipcode1,
            to: req.params.zipcode2,
            distance: 10
        }
        res.send(response);                
    }
};

module.exports = distance;