const {getItemOpts,getItemsOpts} = require('../model/itemsSchema')

// middleware function
function itemRoutes (fastify,options,Done)
{

    //================= Get All Items ======================
        fastify.get('/items',getItemsOpts)


    //================= Get Items-by-Id ===================

        fastify.get('/items/:id', getItemOpts)

     //================= Create Item       ===================
    //=================  update Item-by-Id ===================
   //=================   delete Item-by-Id ===================

    Done();
}

module.exports=itemRoutes;