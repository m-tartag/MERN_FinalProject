const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

// @route     POST api/users
// @desc      Register User
// @access    Public
router.post(
  '/',

  // 1: Express-Validator (Check to make sure input is uniform)
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Invalid E-mail').isEmail(),
    check('password', 'Password must contain atleast (6) characters').isLength({
      min: 6,
    }),
  ],

  // Use Async/Await here - Important

  async (req, res) => {
    const errors = validationResult(req);

    // Just a fancy error catch - sends back error in json format

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // 2: Check to see if User Already Exists

    const { name, email, password } = req.body;
    console.log(req.body);
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      // 4. Create New User

      // This creates a new instance of the user.. it doesnt SAVE IT YET
      // Must call User.save to save.. but first, must encrypt password
      user = new User({
        name,
        email,
        password,
      });

      // 5. Encrypt password Middleware

      // Pretty much boilerplate

      // If you’re wondering what the 10(that’s used for hashing) is,
      // then that’s the work factor or the number of rounds the data
      // is processed for.More rounds leads to more secured hash but
      // slower / expensive process.
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // 6. Now Finally SAVE USER TO DB
      // ***************************
      await user.save();

      // 7. Lastly... Return {jsonwebtoken} to User
      // this makes auth possible

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
