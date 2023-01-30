import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';
const app = express();

dotenv.config();

app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());
console.log("inside index.js of server");
app.use('/posts',postRoutes) //middleware to connect to routes // every route inside of posts route will stath /post
//const CONNECTION_URL = 'mongodb+srv://sumanth9811:sumanth_9811@cluster0.ecf8iwm.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser : true, useUnifiedTopology : true}) //these last  params for not getting warinings
 .then(() => app.listen(PORT,() => console.log(`Server running on port : ${PORT}`)))
 .catch((error) => console.log(error.message));

 //mongoose.set('useFindAndModify',false); // not to get any warinigs in console