import mongoose from "mongoose";

const orderOnlineSchema = new mongoose.Schema({
 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant',
    },

    pickupTime:{
        type:String,
    },
    
   deliveryTime:{
        type:String,
    },
    date:{
        type:String
    },
    time:{
        type:Number
    }
  
}, {
    timestamps:true,
});

orderOnlineSchema.pre(/^find/, function(next){
    this.populate({
        path:"Restaurant",
    })
    .populate({
        path:"User",
    });
  next ();
});

export default mongoose.model('OrderOnline',orderOnlineSchema);