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
        resolve(results[0] ? results[0] : {});
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
    connection.query(`INSERT INTO fichajes (FechaHoraEntrada, FechaHoraSalida, HorasTrabajadas, IdTrabajo, IdUsuario, GeolocalizacionLatitud, GeolocalizacionLongitud)VALUES('${body.FechaHoraEntrada}', '${body.FechaHoraSalida}', '${body.HorasTrabajadas}', '${body.IdTrabajo}', '${body.IdUsuario}', '${body.GeolocalizacionLatitud}', '${body.GeolocalizacionLongitud}')`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        connection.query(`SELECT * FROM fichajes WHERE IdFichaje = '${results.insertId}'`, function(error, results, fields) {
          if (error) {
            reject({ message: error });
          } else {
            resolve(results[0] ? results[0] : {});
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
  console.log("PUT");
  return new Promise(function (resolve, reject) {
    connection.query(`UPDATE fichajes SET FechaHoraEntrada='${body.FechaHoraEntrada}', FechaHoraSalida='${body.FechaHoraSalida}', HorasTrabajadas='${body.HorasTrabajadas}', IdTrabajo='${body.IdTrabajo}', IdUsuario='${body.IdUsuario}', GeolocalizacionLatitud='${body.GeolocalizacionLatitud}', GeolocalizacionLongitud='${body.GeolocalizacionLongitud}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        connection.query(`SELECT * FROM fichajes WHERE IdUsuario = '${body.id}'`, function(error, results, fields) {
          if (error) {
            reject({ message: error });
          } else {
            resolve(results[0] ? results[0] : {});
          }
        });
      }
    });
  });
};

/**
 * Recoge todos los fichajes disponibles
 *
 * returns ArrayFichajes
 **/
exports.getFichajesGET = function () {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM fichajes`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results);
      }
    });
  });
};

/**
 * Recoge todos los fichajes de un usuario
 *
 * fichajeID Integer ID del usuario en cuestión
 * returns ArrayFichajes
 **/
exports.getUserFichajesGET = function (userID) {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM fichajes WHERE IdUsuario = '${userID}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results[0] ? results[0] : {});
      }
    });
  });
};

/**
 * Recoge todos los fichajes de un usuario
 *
 * fichajeID Integer ID del usuario en cuestión
 * returns ArrayFichajes
 **/
exports.getLastUsuFichaje = function (userID) {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM fichajes WHERE IdUsuario = '${userID}' ORDER BY FechaHoraEntrada DESC LIMIT 1`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results[0] ? results[0] : {});
      }
    });
  });
};
