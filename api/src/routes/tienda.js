const express = require("express");
const router = express.Router();
const tiendaController = require("../controllers/tiendaController");

// Consulta las baterias de todos los usuarios
// api/tienda
router.get("/",
    tiendaController.consultarBaterias
);

// Elimina una bateria que fue comprada
// api/tienda
router.delete("/:id",
    tiendaController.eliminarBateriaComprada
);

module.exports = router;
