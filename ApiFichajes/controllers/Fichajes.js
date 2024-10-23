"use strict";

var utils = require("../utils/writer.js");
var Fichajes = require("../service/FichajesService");

module.exports.fichajesDELETE = function fichajesDELETE(
  req,
  res,
  next,
  userID
) {
  Fichajes.fichajesDELETE(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fichajesGET = function fichajesGET(req, res, next, userID) {
  Fichajes.fichajesGET(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fichajesPOST = function fichajesPOST(req, res, next, body) {
  Fichajes.fichajesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fichajesPUT = function fichajesPUT(req, res, next, body) {
  Fichajes.fichajesPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFichajesGET = function getFichajesGET(req, res, next) {
  Fichajes.getFichajesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserFichajesGET = function getUserFichajesGET(
  req,
  res,
  next,
  userID
) {
  Fichajes.getUserFichajesGET(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
