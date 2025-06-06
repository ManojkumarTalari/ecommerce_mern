import express from "express"
import cors from "cors"
import 'dotenv/config'
import ConnectDB from "./config/mongodb.js"
import ConnectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//App Config

const app=express()
const port=process.env.PORT || 4000 

const connectDataBase=async () => {
   await  ConnectDB();
   app.listen(port,()=>{
    console.log("Server Started on PORT "+ port);
})
}
connectDataBase();
ConnectCloudinary();
//middlewars

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
//api endpoints 
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})


