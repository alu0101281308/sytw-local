const express = require("express");
const router = express.Router();
const tiendaController = require("../controllers/tiendaController");

// Consulta las baterias de todos los usuarios
// api/tienda
router.get("/",
    tiendaController.consultarBaterias
);

module.exports = router;
