const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/CarDB";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });
client.connect(function(){
  console.log('created')
},err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var CarSchema = mongoose.Schema({
    numberplate : String,
    vehiclecolor: String,
    quantity: Number
  });

  // compile schema to model
  var Car = mongoose.model('numberplate', CarSchema, 'CarDB');

  // a document instance
  var car1 = new Car({ numberplate : '51h10125', vehiclecolor: 'red', quantity: 1 });

  // save model to database
  car1.save(function (err, book) {
    if (err) return console.error(err);
    console.log(car1.numberplate + " parking in this area at lot number " + car1.quantity);
  });
  var car2 = new Car({ numberplate : '51h10125', vehiclecolor: 'blue', quantity: 2 });

  // save model to database
  car2.save(function (err, book) {
    if (err) return console.error(err);
    console.log(car2.numberplate + " parking in this area at lot number " + car2.quantity);
  });
  
