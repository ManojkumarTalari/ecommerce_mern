import mongoose from "mongoose"

const ConnectDB=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log('DB Connected');
        
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`)
}

export default ConnectDB;