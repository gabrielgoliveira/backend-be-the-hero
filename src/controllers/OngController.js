const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const id = crypto.randomBytes(4).toString('HEX');
        const {name, email, whatsapp, city, uf} = request.body;
        
        await connection('ongs').insert({
            id,
            name,
            email, 
            whatsapp,
            city, 
            uf
        });
        return (response.json({id}));
    },

    async delete(request, response){
        var ong_id = request.headers.authorization;
        const flag = await connection('ongs').where('id', ong_id).del();
        if(flag == 1){
            console.log('Sucesso ao deletar');
            return (response.send('Deletado'));
        } else {
            console.log('Error: ' + flag);
            return (response.send('Error'));
        }
        
    },

    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return (response.json(ongs));
        
    }
};