import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import eventRoutes from './routes/events.js';
import dotenv from 'dotenv';


dotenv.config()
const app = express() ;

app.use(bodyParser.json({ limit : "10mb", extended:true }));
app.use(bodyParser.urlencoded({ limit : "10mb", extended:true }));
app.use(cors());

app.use('/events',eventRoutes )

app.get('/' , (req,res) => {
  res.send('Hello!')
})


const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);