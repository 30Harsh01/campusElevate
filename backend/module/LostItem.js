

const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  title: {type:String},
  description:{type:String},
  // image: {type:String},
  date:{type:String},
  place: {type:String},
  ownerName: {type:mongoose.Schema.Types.ObjectId,required:true}
});

module.exports = mongoose.model('LostItem', lostItemSchema);
