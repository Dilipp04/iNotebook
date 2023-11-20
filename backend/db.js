const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/inotebook"

// Connection to MongoDB
const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(() => {
    console.log('Connected to MongoDB successfully \n');
})
.catch(error => {
    console.error('Failed to connect to MongoDB:', error);
});
}
module.exports = connectToMongo
