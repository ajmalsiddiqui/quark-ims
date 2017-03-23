const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://ajmal:alfasierra@ds137360.mlab.com:37360/quark';

function getDocs(callback){
  callback = typeof callback==='function'? callback : new Function(callback);
  MongoClient.connect(url, (err, db) => {
    if(err){
      console.log(err);
    }
    else{
      let docs = db.collection('Auth').find({}, {_id: 0, name: 1, email: 1, number: 1}).toArray();  //returns promise
      docs.then((val) => {
        val.forEach((elem)=>{
          callback(elem);
        });
        db.close();
      });
    }
    //db.close();
  });
}

module.exports = {
  'getDocs': getDocs
}
