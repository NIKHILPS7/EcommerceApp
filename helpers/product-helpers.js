
var db=require('../config/connection')
var collection=require('../config/collections');
const collections = require('../config/collections');
const { PRODUCT_COLLECTION } = require('../config/collections');
var objectId=require('mongodb').ObjectID
module.exports={
    addProduct:(product,callback)=>{
        //console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
            //console.log(data.insertedId);
            callback(data.insertedId);
        })
    },
    getAllProducts:()=>{
        return new Promise(async (resolve,reject) => {
            let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray();
            resolve(products);
        })
    },
    deleteProducts:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response)
                resolve(response)
            })
        })
    },
    getProductDeails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(PRODUCT_COLLECTION).findOne({_id:objectId(proId)}).then((product)=>{
                resolve(product)
            })
        })
    },
    updateProducts:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Name:proDetails.Name,
                    Price:proDetails.Price,
                    Category:proDetails.Category,
                    Description:proDetails.Description
                }
            }).then((response)=>{
                resolve()

            })
        })
    }

}
