const Bateria = require('../models/Bateria');

exports.consultarBaterias = async (req, res) => {       
    try {         
        // sabemos el usuario auth         
        const baterias = await Bateria.find().sort({registro: -1});         
        res.json({ baterias });     
    } catch (error) {         
        console.log(error);         
        res.status(500).send('Algo salio mal en obtener baterias');     
    } 
}

