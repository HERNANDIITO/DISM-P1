'use strict';


/**
 * Recoge todos los fichajes de un usuario
 *
 * userID Integer ID del usuario en cuestión
 * returns ArrayFichajes
 **/
exports.getUserFichajesGET = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "GeolocalizacionLatitud" : 1.2398472987,
  "GeolocalizacionLongitud" : 1.3948713928,
  "IdUsuario" : 1001,
  "FechaHoraEntrada" : 1023487875567854,
  "id" : 10,
  "FechaHoraSalida" : 1023487875876587,
  "IdTrabajo" : 1110,
  "HorasTrabajadas" : 8
}, {
  "GeolocalizacionLatitud" : 1.2398472987,
  "GeolocalizacionLongitud" : 1.3948713928,
  "IdUsuario" : 1001,
  "FechaHoraEntrada" : 1023487875567854,
  "id" : 10,
  "FechaHoraSalida" : 1023487875876587,
  "IdTrabajo" : 1110,
  "HorasTrabajadas" : 8
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar usuario dada su ID
 *
 * userID Integer ID del usuario en cuestión
 * no response value expected for this operation
 **/
exports.userDELETE = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recoge un usuario dada la ID
 *
 * userID Integer ID del usuario en cuestión
 * returns User
 **/
exports.userGET = function(userID) {
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


/**
 * Crea un usuario nuevo
 *
 * body NewUser  (optional)
 * returns User
 **/
exports.userPOST = function(body) {
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


/**
 * Actualizar usuario dada su ID
 *
 * body User  (optional)
 * returns User
 **/
exports.userPUT = function(body) {
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

