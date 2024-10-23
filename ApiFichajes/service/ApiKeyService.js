"use strict";

/**
 * Eliminar apiKey dada su ID
 *
 * userID Integer ID del apiKey en cuestión
 * no response value expected for this operation
 **/
exports.apiKeyDELETE = function (userID) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Recoge un apiKey dada la ID
 *
 * userID Integer ID del apiKey en cuestión
 * returns User
 **/
exports.apiKeyGET = function (userID) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      clave: "PabloABC123",
      usuario: "PabloABC123",
      id: 10,
      nombre: "Pablo",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Crea un apiKey nuevo
 *
 * body NewUser  (optional)
 * returns User
 **/
exports.apiKeyPOST = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      clave: "PabloABC123",
      usuario: "PabloABC123",
      id: 10,
      nombre: "Pablo",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Actualizar apiKey dada su ID
 *
 * body ApiKey  (optional)
 * returns ApiKey
 **/
exports.apiKeyPUT = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      id: 10,
      key: "wdajhgcvwefxesCDFEWcewfjchbfewcsaDcw",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
