const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BlogPosts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

module.exports = mongoose;

