import config from '../config';
import mongoose from 'mongoose';

const url = "mongodb://localhost:27017/imrego";

mongoose.connect(url, {useMongoClient: true},  (err)=>{
    console.log (err?err:"Connected")
});