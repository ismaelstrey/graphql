const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('users').insert({
//     name: 'Ismael strey',
//     email: 'ismaelstrey@hotmail.com',
//     password: 'teste'
// }).then(data => console.log(data))