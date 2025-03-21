import mongoose from 'mongoose'

const {Schema} = mongoose

const SingerSchema = new Schema({
  id :{
    type : Number,
    required : [true, 'id required'],
    unique : true
  },
  name :{
    type : String,
    required : true
  },
  country :{
    type : String,
    required : true
  },
  songs :[
    {
      type : Schema.Types.ObjectId,
      ref : 'song'
    }
  ]
})

export default mongoose.model('singer',SingerSchema)
