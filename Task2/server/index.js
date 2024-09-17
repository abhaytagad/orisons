const express = require("express");
const connect = require("./Config/Database");
const cors = require("cors");
const bodyParser = require("body-parser");
const Task = require("./models/Task");
require("dotenv").config();

const app = express();
server = app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});


app.use(cors());
app.use(express.json());

connect();

app.post('/tasks', async (req, res) => {
  try{
    const task = new Task(req.body);
  await task.save();
  res.send(task);
  }
  catch(error){
    console.log(error);
    res.status(400).send(error);
  }
});

app.get('/tasks', async (req, res) => {
  try{
    const tasks = await Task.find();
  res.send(tasks);
  }
  catch(error){
    console.log(error);
    res.status(400).send(error);
  } 
});

app.delete('/tasks/:id', async (req, res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id);
  res.send(task);
  }
  catch(error){
    console.log(error);
    res.status(400).send(error);
  }
});

app.patch('/tasks/:id', async (req, res) => {
  try{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(task);
  }
  catch(error){
    console.log(error);
    res.status(400).send(error);
  }
});



