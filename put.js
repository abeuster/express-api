import request from 'request';

const json = {
    "name": "Bertram Gilfoyle",
    "email": "bertram2@piedpiper.com",
};

request.put({
    url: 'http://localhost:3002/users/2',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});