const mongoose = require('mongoose');

/* ----- Your DB ------ */
const dbUrl = 'mongodb://shadd:azerty12@ds147537.mlab.com:47537/wholup';
/* --------------------- */

/* ----- DB Options ------ */
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...')
  }
});

module.exports = {
  mongoose: mongoose,
}
