import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    items:[
        {
            name:String,
            price:Number,
            quantity:Number,
            image:String,
        },
    ],
    total:{
        type:Number,
        required:true,
    },
    shippingInfo:{
        name:String,
        address:String,
        phone:String,
        paymentMethod:String,
    },
    },
    {timestamps:true}
);
const Order=mongoose.model("Order",orderSchema);
export default Order;