// jwt token
const jwt = require('jsonwebtoken');

// controller for signup
exports.signup = async(req,res)=>{
    try{
        const {fullname,username,password,gender} = req.body;
    }catch{
        return res.status(400).json({message:"Invalid request"});
    }
    // console.log("signupuser");
    
}

// controller for login
exports.login = (req,res)=>{
    console.log("loginuser");
}

// controller for logout
exports.logout = (req,res)=>{
    console.log("logoutuser");
    }
