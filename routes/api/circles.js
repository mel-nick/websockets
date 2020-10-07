const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');

const { io } = require('../../server');
const Circle = require('../../dbmodels/Circle');

//@route POST api/circles
//@desc Register user
//@ccess public
router.post('/', async (req, res) => {
  try {
    const newCircle = new Circle();
    const new_Circle = await newCircle.save();
    res.json(new_Circle);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//@route GET api/circles
//@desc GET all user
//@ccess public

router.get('/', async (req, res) => {
  try {
    const circles = await Circle.find({}).sort({ _id: -1 });
    res.json(circles);
  } catch (err) {
    console.error(err.message);
  }
});

//@route PUT api/circles
//@desc Set Active user
//@ccess public

router.put('/', async (req, res) => {
  const { _id, is_active, ...rest } = req.body;
  try {
    const user = await Circle.findByIdAndUpdate(
      { _id },
      { is_active, ...rest }
    );
    await user.save();
    const upadatedCircle = await Circle.findById({
      _id,
    });
    res.json(upadatedCircle);
  } catch (err) {
    console.error(err.message);
  }
});

//@route DELETE api/circles
//@desc Set Active user
//@ccess public

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await Circle.findOneAndRemove(_id);
    res.json({
      msg: 'The user has been removed',
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
