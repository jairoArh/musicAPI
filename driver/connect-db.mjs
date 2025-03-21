import mongoose from "mongoose";

const URL = process.env.URL
const DB = process.env.DB

try{
  await mongoose.connect( URL + DB )
  console.log('MongoDB Connect Success....')
}catch(error){
  console.log(error)
}

export default mongoose