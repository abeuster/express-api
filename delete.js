import request from 'request';

const json = {
    //"name": "Dinesh Chugtai",
    //"email": "dinesh@piedpiper.com",
};

request.delete({
    url: 'http://localhost:3002/users/42',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});