const mongoose = require('mongoose');

const connect = async ()=>{
    try {
        const response = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          if (response) {
            console.log('Database connected'); 
          }
    } catch (error) {
        console.log('Something Went Wrong');
    }
}
module.exports = connect;