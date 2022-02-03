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

        // guardar bateria
        await bateria.save();
        res.json({msg: "Bateria guardada exitosamente"});

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
            return res.status(404).json({ msg: 'No existe esa bateria' });
        }

        const propietario = await Usuario.findById(usuario);

        if (!propietario) {
            return res.status(404).json({ msg: 'Propietario no encontrado' });
        }

        // revisar si la bateria pertenece al usuario identificado

        if (bateria.propietario.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }

        // Eliminar

        await Bateria.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Bateria eliminada correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Algo salio mal en eliminar bateria');
    }
}
