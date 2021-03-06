const { Schema, model } = require('mongoose');
const itemSchema = new Schema({
  button: String,
  item: String,
  description: String,
});

const userSchema = new Schema({
  imageUrl: String,
  name: String,
  googleId: String,
  user: String,
  pass: String,
  items: [itemSchema],

});

const User = model('User', userSchema);

module.exports = User;
