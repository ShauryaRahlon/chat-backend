import mongoose from "mongoose";


type ConnectionObject={
    isConnected?:number
}
const connection:ConnectionObject={}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log('Already connected')
        return;
    }
    try{
        const db=await mongoose.connect(process.env.MONGODB_URI ||'',{})
        connection.isConnected=db.connections[0].readyState;//ready state apne aap mein ek number hota h
        console.log('Database connected successfully')
    }catch(err){
        console.log('Database connection Failed',err)
        process.exit(1);
    }
}

export default dbConnect;