const { Schema, model } = require('mongoose');
const itemSchema = new Schema({
  button: String,
  item: String,
});

const userSchema = new Schema({
  imageUrl: String,
  name: String,
  googleId: String,
  user: String,
  pass: String,
  items: [itemSchema],
  description: String,
});

const User = model('User', userSchema);

module.exports = User;
