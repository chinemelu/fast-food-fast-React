"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var port = process.env.PORT || 8080;
var app = (0, _express.default)();
app.use(_express.default.static(_path.default.join(__dirname)));
app.all('*', function (req, res) {
  res.sendFile(_path.default.join(__dirname, 'index.html'));
});
app.listen(port);