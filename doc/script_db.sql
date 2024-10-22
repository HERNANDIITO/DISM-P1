-- Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS sistema_fichajes;
USE sistema_fichajes;

-- Crear la tabla Usuarios
CREATE TABLE IF NOT EXISTS Usuarios (
    IdUsuario INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Usuario VARCHAR(50),
    Clave VARCHAR(50)
);

-- Crear la tabla Trabajos
CREATE TABLE IF NOT EXISTS Trabajos (
    IdTrabajo INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(200) NOT NULL
);

-- Crear la tabla Fichajes
CREATE TABLE IF NOT EXISTS Fichajes (
    IdFichaje INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    FechaHoraEntrada DATETIME,
    FechaHoraSalida DATETIME,
    HorasTrabajadas INT,
    IdTrabajo INT,
    IdUsuario INT,
    GeolocalizacionLatitud FLOAT,
    GeolocalizacionLongitud FLOAT,
    FOREIGN KEY (IdTrabajo) REFERENCES Trabajos(IdTrabajo)
        ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Crear la tabla ApiKey
CREATE TABLE IF NOT EXISTS ApiKey (
    idKey INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `Key` VARCHAR(50) NOT NULL
);

-- Insertar algunos valores de ejemplo en la tabla Trabajos
INSERT INTO Trabajos (IdTrabajo, Nombre) VALUES
(1, 'Desarrollo de Software'),
(2, 'Soporte Técnico'),
(3, 'Marketing Digital');

-- Insertar algunos usuarios de ejemplo en la tabla Usuarios
INSERT INTO Usuarios (IdUsuario, Nombre, Usuario, Clave) VALUES
(1, 'Juan Perez', 'juanp', 'clave123'),
(2, 'Ana Lopez', 'analo', 'clave456');

-- Insertar un valor de ejemplo en la tabla ApiKey
INSERT INTO ApiKey (`Key`) VALUES
('abc123key456');
