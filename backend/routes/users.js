var express = require('express');
var router = express.Router();
const User = require('../schema/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Loading.....');
});

router.get('/details',async function(req,res){
const user = await User.find()
res.send(user)
})

router.post('/register', async (req,res)=>{
  try{
  const {name,email,mobile}=req.body
  const user = await User.findOne({email:email})
  if(user){
    res.status(400).json({
      message:'email already exists'
    })
  }
  else{
    const record = await new User({name,email,mobile}).save()
    res.status(400).json({
      message:"record added successfully"
    })
  }
  }
  catch(err){
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router;
