//const request = require('request'); //Original
import request from 'request';

const json = {
    "name": "Dinesh Chugtai",
    "email": "dinesh@piedpiper.com",
};

request.post({
    url: 'http://localhost:3002/users',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});