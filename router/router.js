const express = require('express');
const router = express.Router();

require('../db doc/atlas_conn');
const User = require('../model/userSchema');
const Data = require('../model/dataSchema');
const SwitchData = require('../model/inputSchema')

let teleData = {
  var1 : 0,
  var2 : 0,
  var3 : 0,
  var4 : 0, 
  var5 : 0,
  date : '',
  user : ''
}

let teleInput = {
  var1 : '0',
  var2 : '0',
}

router.get('/', (req,res) => {
    res.send('hello router');
});

router.post('/signup', async(req,res) => {
  const {firstName, lastName, email, address, password} = req.body;

  console.log(req.body);

  try {
      const newUser = await User.findOne({ email});

      if (newUser) {
          console.log('user already exist');
          return res.status(401).send({ message: 'user already exist' });
      }

      const user = new User ({ firstName, lastName, email, address, password }); 
      await user.save();
      
      console.log('user registered successfully!')
      return res.status(200).send({ message : 'user registered successfully!' });
  } catch (err) {
      console.log(err);
  }
});




router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
  
      if (user) {
        console.log('User logged in successfully!');
        res.status(200).json({ message: 'user logged successfully', userName: 'user'});

      } else {
        console.log('Invalid email or password!');
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error processing request' });
    }
  });

router.post('/postdata', async(req,res) => {

  // const {var1, var2, var3, var4, var5, date, user} = req.body;
  // teleData.var1 = var1;
  // teleData.var2 = var2;
  // teleData.var3 = var3;
  // teleData.var4 = var4;
  // teleData.var5 = var5;
  // teleData.date = date;
  // teleData.user = user;
  res.json(req.body);
  // console.log(teleData);
  
  try{
      if(req.body){
      const data = new Data (req.body); 
      await data.save();
      }

  }catch (err) {
      console.log(err);
  }
});

router.post('/postinput', async(req,res) => {

  const {var1, var2} = req.body;
  teleInput.var1 = var1;
  teleInput.var2 = var2;

  res.send(req.body);
  console.log(teleInput);
  
  try{
    const inputdata = await SwitchData.findOne({ _id: '6465b8f94e08b3d0d1a1fdcb' });
 
    inputdata.var1 = var1;
    inputdata.var2 = var2;

    await inputdata.save();

    console.log('Document updated successfully',{inputdata});

  }catch (err) {
      console.log(err);
  }
});


router.get('/getdata', (req, res) => {
  const  userName  = req.query['user'];
  Data.findOne({user: userName}).sort('-timestamp')
    .then((data) => {
      if (data) {
        res.json(data);
        // console.log(data);
      } else {
        res.status(404).json({ error: 'No data found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});


  router.get('/getinput', (req, res) => {
    const  userName  = req.query['user'];
    // console.log(userName)
    SwitchData.findOne({var2: userName}).sort('-timestamp')
      .then((data) => {
        if (data) {
          res.json(data.var1);
          // console.log(data);
        } else {
          res.status(404).json({ error: 'No data found' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  });

  const getDocument = async (date) => {
    try {
      const data = await Data.find({date : `${date}`}).limit(10000);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  const getDocument2 = async () => {
    try {
      const data = await Data.find({}).limit(1000);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  router.get('/api/data', async (req, res) => {

    const { fileName } = req.query;
    const data = await getDocument(fileName);
    res.json(data);
  });

  router.get('/api/brush', async (req, res) => {

    const { fileName } = req.query;
    const data = await getDocument(fileName);
    res.json(data);
  });

  router.get('/home', (req, res) => {
    res.send('Welcome to the home page!');
  });

module.exports = router ;
