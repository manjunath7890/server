// add atlas req along with url

const mongoose = require('mongoose');
const dbb = process.env.db;

mongoose.connect(dbb, {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology: true
    // useFindAndModify:false
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });