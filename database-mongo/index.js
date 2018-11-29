var mongoose = require('mongoose');
mongoose.connect('mongodb://yahya:y123456@ds125821.mlab.com:25821/bloggerdatabase');



var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  id:Number,
  posts: String,

});

var Item = mongoose.model('Item', itemSchema);
var id=0;

var saveData = function(data){

  var obj = {
    id:++id,
    posts:data.message,

  }
  console.log('daaaaaa',data)
  var a = new Item(obj)
  a.save();
}

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    console.log('items',items)
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveData = saveData;
module.exports.Item = Item;