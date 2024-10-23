const User = require('../Models/usermodel')


const home = (req , res)=>{
res.render('index')
}
const Create = (req ,res)=>{
const {username , password} = req.body;
const newUser = new User({username , password})
newUser.save()
res.render('lists')


}

module.exports = {Create , home}