const connection = require('../database/connection');

module.exports = {
    async indexAllIncidents(request, response){
        const incidents = await connection('incidents').select('*');
        return response.json(incidents);
    },
    async indexOfOng(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents').select('*').where('ong_id', ong_id);
        return(response.json(incidents));
    },
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').insert({
            title, 
            description,
            value,
            ong_id
        });

        return (response.json({incident}));
    },
    async delete(request, response){
        const id_incident = request.params.id;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').select('*').where('id', id_incident);
        if(incident[0].ong_id == ong_id){
            console.log('Remocao Autorizada');
        }
        return response.send('oi');
    }
    
}