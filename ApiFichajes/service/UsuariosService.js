"use strict";

const connection = require("../controllers/db_connection")

/**
 * Eliminar usuario dada su ID
 *
 * userID Integer ID del usuario en cuestión
 * no response value expected for this operation
 **/
exports.userDELETE = function (userID) {
  return new Promise(function (resolve, reject) {
    connection.query(`DELETE FROM usuarios WHERE IdUsuario = '${userID}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results.affectedRows >= 1 ? { result: true } : { result: false });
      }
    });
  });
};

/**
 * Recoge un usuario dada la ID
 *
 * userID Integer ID del usuario en cuestión
 * returns User
 **/
exports.userGET = function (userID) {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM usuarios WHERE IdUsuario = '${userID}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        resolve(results[0] ? results[0] : {});
      }
    });
  });
};

/**
 * Crea un usuario nuevo
 *
 * body NewUser  (optional)
 * returns User
 **/
exports.userPOST = function (body) {
  return new Promise(function (resolve, reject) {
    connection.query(`INSERT INTO usuarios (Nombre, Usuario, Clave) VALUES ('${body.nombre}', '${body.usuario}', '${body.clave}')`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        connection.query(`SELECT * FROM usuarios WHERE IdUsuario = '${results.insertId}'`, function(error, results, fields) {
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
 * Actualizar usuario dada su ID
 *
 * body User  (optional)
 * returns User
 **/
exports.userPUT = function (body) {
  return new Promise(function (resolve, reject) {
    connection.query(`UPDATE usuarios SET Nombre='${body.nombre}', Usuario='${body.usuario}', Clave='${body.clave}' WHERE IdUsuario = '${body.id}'`, function(error, results, fields) {
      if (error) {
        reject({ message: error });
      } else {
        connection.query(`SELECT * FROM usuarios WHERE IdUsuario = '${body.id}'`, function(error, results, fields) {
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
