const MongoClient=require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=function(done){

    const url='mongodb://127.0.0.1:27017/'
 
  const dbname='Shopping'

MongoClient.connect(url,function(err,data){
    if(err) return done(err)
    state.db=data.db(dbname)
    done()

})
}

module.exports.get=function(){
    return state.db
}