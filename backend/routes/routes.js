const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Message = require('../models/Message');
const User = require('../models/User');
const List = require('../models/List');
const app = express();

// router.post(`/add-message`, authorize, (req, res) => {
//     let msg = req.body
//     msg.ownerId = res.locals.user._id
//     Message.create(msg).then(message => res.json(message))
// })

router.get(`/get-user`, authorize, async (req, res) => {
  //console.log("in get user after next", res.locals.user._id)
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});

// router.get(`/get-messages`, (req, res) => {
//     Message.find().then(messages => res.json(messages))
// })

// router.get(`/get-my-messages`, authorize, (req, res) => {
//     Message.find({ ownerId: res.locals.user._id }).then(messages => res.json(messages))
// })

router.get(`/`, (req, res) => {
  res.json({ serverWorks: true });
});

router.post(`/login`, async (req, res) => {
  //Find user
  let user = await User.findOne({ user: req.body.user });

  if (user.pass != req.body.pass) {
    res.json({ error: 'Password does not match' });
  }

  //No matter what i have a user and now I can create the jwt token
  jwt.sign({ user }, 'secret key', { expiresIn: '30min' }, (err, token) => {
    res.json({ user, token });
  });
});

router.post(`/signUp`, async (req, res) => {
  //Find user
  let user = await User.findOne({ user: req.body.user });

  //If no user >> Create User
  if (!user) {
    user = await User.create(req.body);
  } else {
    res.json({ error: 'User exists' });
  }

  //No matter what i have a user and now I can create the jwt token
  jwt.sign({ user }, 'secret key', { expiresIn: '30min' }, (err, token) => {
    res.json({ user, token });
  });
});

router.post(`/bucketList`, async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.body.user },
    { $push: { items: { button: req.body.button, item: req.body.item } } },
    { new: true }
  );
  res.status(200).json({
    status: 'ok',
    user,
  });
});

router.post(`/feed`, async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.body.user},
    { $push: { items: { description: req.body.description } } },
    { new: true }
  );
  res.status(200).json({
    status: 'ok',
    user,
  });
});

router.get("/getUser", (req, res) => User.find().then((response) => res.json(response)))


function authorize(req, res, next) {
  // console.log('monkey in the mittle', req.headers);
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1];
    // console.log(token);
    jwt.verify(token, 'secret key', async (err, data) => {
      if (!err) {
        console.log(data);
        res.locals.user = data.user;
        next();
      } else {
        console.error(err);
        res.json({ err });
      }
    });
  } else {
    res.status(403).json({ message: 'You dont have no token' });
  }
}
module.exports = router;
