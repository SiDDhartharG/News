const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then((result) => {
    console.log("connected to db " + result);
}).catch(err => console.log('ERROR!' + err))

module.exports = exports = mongoose



