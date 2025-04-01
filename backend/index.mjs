import express from 'express';
import helmet from 'helmet';
import routes from './src/routes/index.mjs';
import mongoose from 'mongoose';
import { ENV }from './src/constants/index.mjs';
import chalk from 'chalk';

const app=express();
app.use(helmet());
app.use(express.json());
const PORT = ENV.PORT;
mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@ayeshacluster0.cwvnn.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&tls=true&appName=AyeshaCluster0`);


// console.log("DB User:", ENV.DB_USER);
// console.log("DB Name:", ENV.DB_NAME);
// console.log("DB Pass:", ENV.DB_PASS ? "Present" : "Not Present"); // Avoid logging actual passwords

mongoose.connection.on("connected",()=>{
    console.log(chalk.white.bgGray("connected to database"));
})
mongoose.connection.on("error",(err)=>{
    console.log(chalk.red.bgGray("error connecting to database",err));    
    })

app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.use('/api',routes);

app.listen(PORT,()=>{
    console.log('Server is running on port');
})