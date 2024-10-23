"use strict";

var utils = require("../utils/writer.js");
var Trabajos = require("../service/TrabajosService");

module.exports.getWorksGET = function getWorksGET(req, res, next) {
  Trabajos.getWorksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.workDELETE = function workDELETE(req, res, next, userID) {
  Trabajos.workDELETE(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.workGET = function workGET(req, res, next, userID) {
  Trabajos.workGET(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.workPOST = function workPOST(req, res, next, body) {
  Trabajos.workPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.workPUT = function workPUT(req, res, next, body) {
  Trabajos.workPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
