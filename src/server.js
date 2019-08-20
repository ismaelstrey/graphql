const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')
const { server } = require ('../.env')

const app = express()
app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(server.port, ()=> console.log(`Servidor rodando: ${server.host}:${server.port}${server.api}`))
