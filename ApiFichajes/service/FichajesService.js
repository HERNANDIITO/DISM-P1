"use strict";

const connection = require("../controllers/db_connection")

/**
 * Eliminar fichaje dada su ID
 *
 * fichajeID Integer ID del fichaje en cuestión
 * no response value expected for this operation
 **/
exports.fichajesDELETE = function (fichajeID) {
  return new Promise(function (resolve, reject) {
    connection.query(`DELETE FROM fichajes WHERE IdFichaje = '${fichajeID}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results.affectedRows >= 1 ? { result: true } : { result: false });
      }
    });
  });
};

/**
 * Recoge un fichaje dada la ID
 *
 * fichajeID Integer ID del fichaje en cuestión
 * returns Fichaje
 **/
exports.fichajesGET = function (fichajeID) {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM fichajes WHERE IdFichaje = '${fichajeID}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results[0]);
      }
    });
  });
};

/**
 * Crea un fichaje nuevo
 *
 * body NewFichaje  (optional)
 * returns Fichaje
 **/
exports.fichajesPOST = function (body) {
  return new Promise(function (resolve, reject) {
    connection.query(`INSERT INTO usuarios (FechaHoraEntrada, FechaHoraSalida, HorasTrabajadas, IdTrabajo, IdUsuario, GeologalizaciónLatitud, GeolocalizacionLongitud) VALUES ('${body.nombre}', '${body.usuario}', '${body.clave}')`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        connection.query(`SELECT * FROM usuarios WHERE IdUsuario = '${results.insertId}'`, function(error, results, fields) {
          if (error) {
            reject({ message: error });
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};

/**
 * Actualizar fichaje dada su ID
 *
 * body Fichaje  (optional)
 * returns Fichaje
 **/
exports.fichajesPUT = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      GeolocalizacionLatitud: 1.2398472987,
      GeolocalizacionLongitud: 1.3948713928,
      IdUsuario: 1001,
      FechaHoraEntrada: 1023487875567854,
      id: 10,
      FechaHoraSalida: 1023487875876587,
      IdTrabajo: 1110,
      HorasTrabajadas: 8,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Recoge todos los fichajes disponibles
 *
 * returns ArrayFichajes
 **/
exports.getFichajesGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        GeolocalizacionLatitud: 1.2398472987,
        GeolocalizacionLongitud: 1.3948713928,
        IdUsuario: 1001,
        FechaHoraEntrada: 1023487875567854,
        id: 10,
        FechaHoraSalida: 1023487875876587,
        IdTrabajo: 1110,
        HorasTrabajadas: 8,
      },
      {
        GeolocalizacionLatitud: 1.2398472987,
        GeolocalizacionLongitud: 1.3948713928,
        IdUsuario: 1001,
        FechaHoraEntrada: 1023487875567854,
        id: 10,
        FechaHoraSalida: 1023487875876587,
        IdTrabajo: 1110,
        HorasTrabajadas: 8,
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Recoge todos los fichajes de un usuario
 *
 * fichajeID Integer ID del usuario en cuestión
 * returns ArrayFichajes
 **/
exports.getUserFichajesGET = function (fichajeID) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        GeolocalizacionLatitud: 1.2398472987,
        GeolocalizacionLongitud: 1.3948713928,
        IdUsuario: 1001,
        FechaHoraEntrada: 1023487875567854,
        id: 10,
        FechaHoraSalida: 1023487875876587,
        IdTrabajo: 1110,
        HorasTrabajadas: 8,
      },
      {
        GeolocalizacionLatitud: 1.2398472987,
        GeolocalizacionLongitud: 1.3948713928,
        IdUsuario: 1001,
        FechaHoraEntrada: 1023487875567854,
        id: 10,
        FechaHoraSalida: 1023487875876587,
        IdTrabajo: 1110,
        HorasTrabajadas: 8,
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
