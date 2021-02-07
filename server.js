const express = require('express');

const app = express();

app.get('/',(req,res)=>{

    res.send('this is working')

});

app.listen(3000,()=>{
    console.log("app is runing on port 3000");
})

/*
/-->res = this is working
/signin --> POST = sucess/fail
/register --> POST = user
/profile/:userId-->GET = user
/image --> PUT --> user

*/