const Bateria = require('../models/Bateria');
const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');

exports.crearBateria = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    try {
        // crea la bateria nueva
        bateria = new Bateria(req.body);
        // Guardar el propietario via JWT
        bateria.propietario = req.usuario.id;

        // guardar bateria
        await bateria.save();
        res.json(bateria);

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }

}


exports.consultarBaterias = async (req, res) => {       
    try {         
        // sabemos el usuario auth         
        const baterias = await Bateria.find({ propietario: req.usuario.id}).sort({registro: -1});         
        res.json({ baterias });     
    } catch (error) {         
        console.log(error);         
        res.status(500).send('Algo salio mal en obtener baterias');     
    } 
}


exports.eliminarBateria = async (req, res) => {
    const { usuario } = req.body;

    try {
        
        let bateria = await Bateria.findById(req.params.id);


        if (!bateria) {
            return res.status(404).json({ msg: 'No existe esa tarea' });
        }

        const propietario = await Proyecto.findById(usuario);

        if (!propietario) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        // revisar si la bateria actual pertenece al usuario identificado

        if (bateria.propietario.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }


        // Eliminar

        await Bateria.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Tarea eliminada correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Algo salio mal en eliminar bateria');
    }
}
