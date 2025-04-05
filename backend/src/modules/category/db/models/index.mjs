import mongoose,{ Schema } from "mongoose";
const dataSchema = new Schema({
   name:{
    type:String,
    required:true
   },
   status:{
    type:String,
    required:true,
    enum :["active","inactive"]
    },
    })

const Model= mongoose.model('Category',dataSchema);

export default Model;
