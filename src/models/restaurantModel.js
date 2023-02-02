import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
 
    restaurantName:{
        type:String,
        Unique: true
    },
    description:{
        type:String
    },
    location:{
        type:String,
        Enum:["Gasabo,Nyarugenge,Kicukiro"],
        
    }
  
}, {
    timestamps:true,
});

restaurantSchema.pre(/^find/, function(next){
    this.populate({
        path:"User",
    });
    
  next ();
});

export default mongoose.model('Restaurant',restaurantSchema);