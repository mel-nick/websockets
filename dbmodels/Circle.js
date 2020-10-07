const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
  is_active: {
    type: Boolean,
    default: false,
  },
});

const Circle = (module.exports = mongoose.model('circle', UserSchema));
