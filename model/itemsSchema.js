const {getItems,getItem} = require('../controller/items')


// -------------- Item Schema ---------------------
const Item ={
    type:'object',
    properties:{
         id: {type:'string'},
         name: {type:'string'}
    }
}

// --------------- get all items ------------------
const getItemsOpts = 
{
    schema:{
        response:{
                200:{
                    type:'array',
                    items:Item
                   }  
                }
           },
           handler:getItems
}


//-------------  get item-by-id -------------------------
const getItemOpts =
{
    schema:{
        response:{
            200: Item
                 }
           },
           handler: getItem
}

//-------------  Create item -------------------------
//-------------  update item-by-id -------------------------
//-------------  delete item-by-id -------------------------

module.exports= {
    getItemOpts,
    getItemsOpts,
    Item
}