const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema({
  username: { type: String, require:true, unique:true},
  password:{type: String, minlength:6, require:true,},
  refreshToken:{type: String,},
},{
  timestamps: true,
});


module.exports = mongoose.model('User', user);
