const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://127.0.0.1:27017/Auth';

function getDocs(callback){
  callback = typeof callback==='function'? callback : new Function(callback);
  MongoClient.connect(url, (err, db) => {
    if(err){
      console.log(err);
    }
    else{
      let docs = db.collection('Auth').find({}, {_id: 0, name: 1, email: 1, number: 1}).toArray();  //returns promise
      docs.then((val) => {
        callback(val);
      });
    }
    db.close();
  });
}

module.exports = {
  'getDocs': getDocs
}
