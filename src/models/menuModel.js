import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant',
    },
    name:{
        type:String,
    },
    description:{
        type:String
    },
    price:{
        type:Number
    }
  
}, {
    timestamps:true,
});

menuSchema.pre(/^find/, function(next){
    this.populate({
        path:"Restaurant",
    });
    
  next();
});

export default mongoose.model('Menu',menuSchema);