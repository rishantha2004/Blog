const mongoose = require('mongoose');
const connectDB = async  () => {


    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected');
    }catch(error){
        console.log('rror');
    }
}


module.exports = connectDB;