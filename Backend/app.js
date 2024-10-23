const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const router = require('./Routes/routte')

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser , useUnifiedTopology})

app.use(router)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
