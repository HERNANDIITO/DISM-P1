"use strict";

/**
 * Eliminar fichaje dada su ID
 *
 * userID Integer ID del fichaje en cuestión
 * no response value expected for this operation
 **/
exports.fichajesDELETE = function (userID) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Recoge un fichaje dada la ID
 *
 * userID Integer ID del fichaje en cuestión
 * returns Fichaje
 **/
exports.fichajesGET = function (userID) {
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
 * Crea un fichaje nuevo
 *
 * body NewFichaje  (optional)
 * returns Fichaje
 **/
exports.fichajesPOST = function (body) {
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
 * userID Integer ID del usuario en cuestión
 * returns ArrayFichajes
 **/
exports.getUserFichajesGET = function (userID) {
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
