// Схема показывает как будут выглядеть наши данные

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

// module.exports = mongoose.model('users', UserSchema);

const User = mongoose.model('users', UserSchema); // имя схемы/коллекции, схема

export default User;