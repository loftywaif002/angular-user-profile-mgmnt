const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema
let User = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    teams: {
      type: Array,
    },
    phone: {
      type: Number,
    },
    start_date: {
      type: Date,
    },
    photoUrl: {
      type: String,
    },
  },
  {
    collection: 'users',
  }
)

module.exports = mongoose.model('User', User)
