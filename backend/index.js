import express from 'express';
import cors from 'cors';

const app=express();
require('dotenv').config();

app.use(cors('http://localhost:5173'));

const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.json({
        status:1, msg:"The server running successfully"
    })
})

app.listen(PORT || 8111,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});