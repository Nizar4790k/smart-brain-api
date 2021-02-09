const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const database = {
    users:[
        {
            id:'123',
            name:'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            joined:new Date()
        },
        {
            id:'124',
            name:'Sally',
            email:'sally@gmail.com',
            password:'bananas',
            entries:0,
            joined:new Date()

        }


    ]
}

app.get('/',(req,res)=>{

    res.send(database.users);

});

app.post('/signin',(req,res)=>{
    
    if(req.body.email===database.users[0].email && 
        req.body.password===database.users[0].password)
    {
    res.json('success')
    }else{
        res.status(400).json('error loggin in');
    }

    res.send('signin');
});

app.post('/register',(req,res)=>{
    const{email,name,password}=req.body;

    
    database.users.push({
        email:email,
        name:name,
        password:password,
        entries:0,
        joined:new Date()
    })

    res.json(database.users[database.users.length-1])
})

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