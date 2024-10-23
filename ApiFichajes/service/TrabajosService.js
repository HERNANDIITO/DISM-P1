"use strict";

const connection = require("../controllers/db_connection")

/**
 * Recoge todos los trabajos disponibles
 *
 * returns ArrayWorks
 **/
exports.getWorksGET = function () {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM trabajos`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results);
      }
    });
  });
};

/**
 * Eliminar trabajo dada su ID
 *
 * workID Integer ID del trabajo en cuestión
 * no response value expected for this operation
 **/
exports.workDELETE = function (workID) {
  return new Promise(function (resolve, reject) {
    connection.query(`DELETE FROM trabajos WHERE IdTrabajo = '${workID}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results.affectedRows >= 1 ? { result: true } : { result: false });
      }
    });
  });
};

/**
 * Recoge un trabajo dada la ID
 *
 * workID Integer ID del trabajo en cuestión
 * returns Work
 **/
exports.workGET = function (workID) {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM trabajos WHERE IdTrabajo = '${workID}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results[0]);
      }
    });
  });
};

/**
 * Crea un trabajo nuevo
 *
 * body NewWork  (optional)
 * returns Work
 **/
exports.workPOST = function (body) {
  return new Promise(function (resolve, reject) {
    connection.query(`INSERT INTO trabajos (Nombre) VALUES ('${body.nombre}')`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        connection.query(`SELECT * FROM trabajos WHERE IdTrabajo = '${results.insertId}'`, function(error, results, fields) {
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
 * Actualizar trabajo dada su ID
 *
 * body Work  (optional)
 * returns User
 **/
exports.workPUT = function (body) {
  return new Promise(function (resolve, reject) {
    connection.query(`UPDATE trabajo SET Nombre='${body.nombre}' WHERE IdUsuario = '${body.id}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        connection.query(`SELECT * FROM trabajo WHERE IdTrabajo = '${body.id}'`, function(error, results, fields) {
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
