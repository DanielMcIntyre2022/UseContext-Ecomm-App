require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(console.log('connected to DB!'))
.catch(console.error());

app.listen(3023, console.log('listening on port 3023'));

