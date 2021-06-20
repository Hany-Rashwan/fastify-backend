const fastify = require('fastify')({logger:true})
fastify.register(require('fastify-swagger'),{ exposeRoute:true, routePrefix :'/doc', swagger:{info:{title:'fastify-api'}}});
fastify.register(require('./routes/items'));

const PORT = 3000;


const start = async () => {
    try{
        await fastify.listen(PORT);
    } catch (error)
    {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();