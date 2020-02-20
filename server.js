const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');
const routes = require('./routes');

const server = express();

server.set("view engine", "njk");

server.use(methodOverride('_method'));
server.use(express.static('public'));
server.use(routes);

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.listen(5000);