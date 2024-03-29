import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';


import postRoutes from './router/posts.js';
import userRoutes from './router/users.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user',userRoutes);
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname,'build')));
app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname,'build','index.html'));
});
const CONNECTION_URL= 'mongodb+srv://deepakbharati:slimshady@cluster0.4igug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);