const jwt = require('jsonwebtoken');

// creating token
const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })
    /* setting jwt to cookie */
    res.cookie("jwt",token,{
        maxAge : 15*24*60*60*1000, /* in milli sec */
        httpOnly: true, /* prevent cross-site scripting attacks */
        sameSite: "strict", //prevent other attacks
        secure: process.env.NODE_ENV !== "development"
        
    }) 
}

module.exports = generateTokenAndSetCookie;
