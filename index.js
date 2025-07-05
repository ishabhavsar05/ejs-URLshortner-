const express = require('express');
const connectToDb = require('./config/db');

const app = express();


app.set('view engine','ejs');


app.get('/',(req,res)=>{
    let data=[
        {
            sNo:1,
            LongURL:'https://www.youtube.com/',
            ShortURL:'YouTube',
            Click:0
        },
        {
            sNo:2,
            LongURL:'https://github.com/',
            ShortURL:'Github',
            Click:0
        },
        {
            sNo:3,
            LongURL:'https://firebase.google.com/',
            ShortURL:'Firebase',
            Click:0
        },
        {
            sNo:4,
            LongURL:'https://nextjs.org/',
            ShortURL:'Nextjs',
            Click:0
        }
        
    ]
    res.render('index',{data});
})


app.listen(3000,async() =>{
try {
    await connectToDb();
    console.log('Server is running on port 3000');
} catch (error) {
    console.log('Error connecting to the database:', error);
    
}
 
})