import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant',
    },

    numberOfPeople:{
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

reservationSchema.pre(/^find/, function(next){
    this.populate({
        path:"Restaurant",
    })
    .populate({
        path:"User",
    });
  next ();
});

export default mongoose.model('Reservation',reservationSchema);