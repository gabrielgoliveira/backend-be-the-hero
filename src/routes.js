const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');


const routers = express.Router();


//routes ong
routers.get('/ongs', OngController.index);
routers.post('/ongs', OngController.create);
routers.delete('/ongs', OngController.delete);

//routes incidents
routers.get('/incidents', IncidentController.indexAllIncidents);
routers.post('/incidents', IncidentController.create);
routers.delete('/incidents/:id', IncidentController.delete);


module.exports = routers;