"use strict";

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("this is arrow");
  }

  if (req.url === "/contact") {
    res.end("contact us");
  }

  res.end("<h1>Hello User</h1>\n    <p>Which Page You are finding its not available</p>\n    <a href=\"#\">click to this link</a>\n    "); // res.end;
});
server.listen(8000);