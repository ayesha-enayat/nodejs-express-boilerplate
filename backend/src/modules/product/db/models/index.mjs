import mongoose,{ Schema } from "mongoose";


const dataSchema = new Schema({
   name:{
    type:String,
    required:true
   },
//    title:{
//     type:String,
//     required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref: 'Category',
        required:true
    }
})

const Model= mongoose.model('Product',dataSchema);

export default Model;
