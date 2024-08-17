// jwt token

const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const generateTokenAndSetCookie = require('../utils/generateToken');

// controller for signup
exports.signup = async(req,res)=>{
    try{
        const {fullName,username,password,gender} = req.body;
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({message:'Username already exists'})
        }

        // hashed password here
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // avatar placegolder
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?${username}`
        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic:gender === 'male'? boyProfilePic : girlProfilePic
        })

        if(newUser){
            // generating jwt token and saving it into cookies
           generateTokenAndSetCookie(newUser._id,res)

            await newUser.save()
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            })
        }else{
            res.status(400).json({message:'Failed to create user'}) 
        }
     

    }catch(err){
        console.log("error message is ",err)
        return res.status(400).json({message:"Invalid request"});
    }
    // console.log("signupuser");
    
}

// controller for login
exports.login = async (req,res)=>{
    // console.log("loginuser");
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username})
        // checking password by decrupting 
        const isPassword = await bcrypt.compare(password,user?.password || "") /* so brcrypt returns if and not catch */
        if(!user || !isPassword){
            return res.status(400).json({message:"Invalid username or password"})
        }
        // generating jwt token
        generateTokenAndSetCookie(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        })

    }catch(err){
        console.log("error message is ",err)
        return res.status(400).json({message:"Invalid request"});
    }
}

// controller for logout
exports.logout = (req,res)=>{
    console.log("logoutuser");
    }
