const db = require('./db');

const userSchema = db.mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String
});

const userModel = db.mongoose.model('users', userSchema);

module.exports = userModel;
