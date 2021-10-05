const express =require('express');
const app=express();

const dbconfig = require('./db')
const roomsRoute=require('./routes/roomsRoute')
const usersRoute=require('./routes/usersRoute')
const bookingsRoute=require('./routes/bookingsRoute')
app.use(express.json())
const path = require('path')

app.use('/api/rooms' , roomsRoute)
app.use('/api/users' , usersRoute)
app.use('/api/bookings' , bookingsRoute)

if(process.env.NODE_ENV === 'production')
{

    app.use('/',express.static('/client/build'))
    app.get('*',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
}

const port = process.env.Port || 3000 ;

app.listen(port, ()=> console.log('node server started') );

