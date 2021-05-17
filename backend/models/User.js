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
});

<<<<<<< HEAD
    imageUrl: String,
    name: String,
    googleId: String,
    user: String,
    pass: String,
    button: String,
    item: [String],
})
=======
const User = model('User', userSchema);
>>>>>>> 15502a260648327e465a287ac427f3993bd2bf9a

module.exports = User;
