// add atlas req along with url

const mongoose = require('mongoose');
const dbb = process.env.db;
// const dbb = "mongodb+srv://flyingfortress289:flyingfortress289@cluster0.zlhd1zd.mongodb.net/?retryWrites=true&w=majority";

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