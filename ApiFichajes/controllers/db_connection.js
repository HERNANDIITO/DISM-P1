var mysql = require("mysql");

// Definir la conexión MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "usuario",
  password: "clave",
  database: "sistema_fichajes",
});

// Conectar a la base de datos
connection.connect(function (err) {
  if (err) {
    console.error("Error conectando a la base de datos: " + err.stack);
    return;
  }
  console.log("Conectado a la base de datos con el ID " + connection.threadId);
});

module.exports = connection