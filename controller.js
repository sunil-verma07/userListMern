const User = require('./model.js')


const getUser = async(req,res)=>{
    try {
        const user = await User.find({})

        if(!user){
           return res.status(404).json({success: false,message: 'User not found'})
        }else{
           return res.status(200).json({success: true,users:user})
        }

    } catch (error) {
        return res.status(500).json({success: false,message:error.message})
    }
}

module.exports ={getUser}