"use strict";

var utils = require("../utils/writer.js");
var ApiKey = require("../service/ApiKeyService");

module.exports.apiKeyDELETE = function apiKeyDELETE(req, res, next, userID) {
  ApiKey.apiKeyDELETE(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiKeyGET = function apiKeyGET(req, res, next, userID) {
  ApiKey.apiKeyGET(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiKeyPOST = function apiKeyPOST(req, res, next, body) {
  ApiKey.apiKeyPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiKeyPUT = function apiKeyPUT(req, res, next, body) {
  ApiKey.apiKeyPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
