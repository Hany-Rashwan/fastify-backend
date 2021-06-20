const Items = require('../model/items')


// *************  Get All Items controller *********************
const getItems = ( req, res)=>
{
    res.send(Items)
}

// ************** Get Item-by-Id controller *******************
const getItem = (req, res)=>
{
    const {id} = req.params;
    const item = Items.find( item =>item.id == id);
    res.send(item)
}


// ************** Create Item controller *******************

// ************** Update Item-by-Id controller *************

// ************** delete Item-by-Id controller *************

module.exports = {
    getItems,getItem
}