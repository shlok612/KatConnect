import mongoose from "mongoose";

const connectToMongo=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected to db");
  }
  catch(error){
    console.log("couldnt connect to db ERROR");

  }
  
}

export default connectToMongo;