exports.sendMessage = async(req,res)=>{
    // console.log("Message Send",req.params.id); testing for postman
    try{

    }catch(err){
        console.log("Error in sendMessage controller",err.message);
        res.status(500).json({err : "Internal server error"})

    }
    
}