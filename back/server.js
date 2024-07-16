//dependencies
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import {createUser} from './database/createUser.js';
import { loginUser } from './database/loginUser.js';
import { createDbInitially } from './database/createDbInitially.js';
import { getLives } from './database/getLives.js';
import { loseLives } from './database/loseLives.js';

const app = express()

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { resetLives } from './database/resetLives.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//middlewares
app.use(cors());

function verify (req, res, next) {
  if (req.params.verifier == 1){
    next()
  }else{
res.redirect("/notAllowed")
  }
  
}


app.use(express.static('../front/'));



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//routes
app.get('/', function (req, res) {
  const options = {
    root: path.join(__dirname,'/../front/html')
};

const fileName = 'index.html';
res.sendFile(fileName, options, function (err) {
    if (err) {
        console.error('Error sending file:', err);
    } else {
        console.log('Sent:', fileName);
    }
});
});



app.get('/mainPage/:verifier',verify, function(req, res){

  const options = {
    root: path.join(__dirname,'/../front/html')
};

const fileName = 'roomSouthWest.html';
res.sendFile(fileName, options, function (err) {
    if (err) {
        console.error('Error sending file:', err);
    } else {
        console.log('Sent:', fileName);
    }
});
})

//not allowed
app.get('/notAllowed', function(req, res){
res.send("NOT ALLOWED")
})

//register
app.post("/registerUser", (req, res) => {
  console.log("result in server "+req.body.username);
  
  if (req.body.username == "" || req.body.password == ""){
    res.status(400).send("NOT OK");
  }else{
    res.status(200).send("OK");
createUser(req.body.username,req.body.password);
  }
  
});

//getlives

app.get("/getLives/:name/:pass", async (req, res)=>{

let result = await getLives(req.params.name,req.params.pass);
console.log("this is the lives "+JSON.stringify(result))
res.send(result);
})

//loseLives

app.put("/loseLives/:name/:pass", async (req, res)=>{
  let livesToLose = req.body.lives;
  console.log("lives to lose "+livesToLose)
  let result = await loseLives(req.params.name,req.params.pass, livesToLose);
  console.log("this is the lives lost "+result)
  res.send(result);
  })

  //resetLives

app.put("/resetLives/:name/:pass", async (req, res)=>{

  let result = await resetLives(req.params.name,req.params.pass);
  console.log("this is the lives reset "+result)
  res.send(result);
  })

//login user
app.post("/loginUser", async (req, res) => {
  console.log("result in server "+req.body.username);
  
  if (req.body.username == "" || req.body.password == ""){
    res.status(400).send("false");
  }else{
  
let loginResult = await loginUser(req.body.username,req.body.password);

if (loginResult == true){
  res.status(200).send("true")
}else if (loginResult == false){
  res.status(500).send("false")
}

  }
  
});


// **listen** 
app.listen(process.env.PORT, async () => {

  await createDbInitially();

  console.log(`Example app listening on port ${process.env.PORT}`)
})