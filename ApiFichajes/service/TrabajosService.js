'use strict';


/**
 * Recoge todos los trabajos disponibles
 *
 * returns ArrayWorks
 **/
exports.getWorksGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 10,
  "nombre" : "Pablo"
}, {
  "id" : 10,
  "nombre" : "Pablo"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar trabajo dada su ID
 *
 * userID Integer ID del trabajo en cuestión
 * no response value expected for this operation
 **/
exports.workDELETE = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recoge un trabajo dada la ID
 *
 * userID Integer ID del trabajo en cuestión
 * returns Work
 **/
exports.workGET = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 10,
  "nombre" : "Pablo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crea un trabajo nuevo
 *
 * body NewWork  (optional)
 * returns Work
 **/
exports.workPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 10,
  "nombre" : "Pablo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar trabajo dada su ID
 *
 * body Work  (optional)
 * returns User
 **/
exports.workPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "clave" : "PabloABC123",
  "usuario" : "PabloABC123",
  "id" : 10,
  "nombre" : "Pablo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

