router.post('/postdata', async(req,res) => {
    res.json(req.body);
    console.log(req.body);
    
    try{
        if(req.body){
        const data = new Data (req.body); 
        await data.save();
        }
  
    }catch (err) {
        console.log(err);
    }
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
  
  router.post('/postinput', async (req, res) => {
    const { var1, var2 } = req.body;
  
    try {
      // Find the document based on the value of var2
      const inputdata = await SwitchData.findOne({ var2: var2 });
  
      if (!inputdata) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      // Update var1 in the found document
      inputdata.var1 = var1;
  
      // Save the updated document
      await inputdata.save();
  
      console.log('Document updated successfully', { inputdata });
  
      res.status(200).json({ message: 'Document updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  router.post('/postdata', async(req,res) => {
    res.json(req.body);
    console.log(req.body);
    
    try{
        if(req.body){
        const data = new Data (req.body); 
        await data.save();
        }
  
    }catch (err) {
        console.log(err);
    }
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
  
  router.post('/postinput', async (req, res) => {
    const { var1, var2 } = req.body;
  
    try {
      // Find the document based on the value of var2
      const inputdata = await SwitchData.findOne({ var2: var2 });
  
      if (!inputdata) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      // Update var1 in the found document
      inputdata.var1 = var1;
  
      // Save the updated document
      await inputdata.save();
  
      console.log('Document updated successfully', { inputdata });
  
      res.status(200).json({ message: 'Document updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  router.get('/api/data', async (req, res) => {

    const { fileName, userName } = req.query;
    const data = await getDocument(fileName, userName );
    res.json(data);
  });

  router.get('/api/brush', async (req, res) => {

    const { fileName, userName } = req.query;
    const data = await getDocument(fileName, userName);
    res.json(data);
  });