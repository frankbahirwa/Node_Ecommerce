const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));a
app.get('/',(req ,res)=>{
res.json({message:'there'})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
