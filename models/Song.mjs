import mongoose from "mongoose";

const {Schema} = mongoose

const SongSchema = new Schema({
  id :{
    type : Number,
    required : [true, 'id required'],
    unique : true
  },
  name :{
    type : String,
    required : true
  },
  duration:{
    type : Number,
    required : false,
    default : 180
  },
  singer : {
    type:Schema.Types.ObjectId,
    ref : 'singer'
  }
})

export default  mongoose.model('song',SongSchema)