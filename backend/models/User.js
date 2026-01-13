const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  googleId: { type: String, default: null }, // For Google login
  image: { type: String, default: null },
  faceDescriptor: { type: [Number], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
