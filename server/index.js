const express = require('express')
const cors = require('cors')
const connectDB = require('./config/dbconnect.js')
const app = express();
require('dotenv').config();
const routes = require('./routes/userRoutes.js')
const path = require('path');

app.use(cors())

app.use(express.json()); 

app.use(express.static(path.join(__dirname, '../client/build')));

connectDB();
const PORT = process.env.PORT

app.use('/api', routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})