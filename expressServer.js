const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Connect to MongoDB (if needed in future)
mongoose.connect("mongodb://localhost:27017/sms")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));


const app = express();

// cors policy
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    next();
});

app.use(cors());
app.use(express.json());


app.get("/api/home",(req,res)=> {
    res.json({
      message: "Hello from Node.js Server, this is your backend speaking! \n This is the Home Page."
    });
})


app.get("/api/contact",(req,res)=> {
    res.json({
      message: "Hello from Node.js Server, this is your backend speaking! \n This is the Contact Page."
    });
})



app.get("/api/students",async (req,res)=> {
     const students = await mongoose.connection
     .db.collection("students")
     .find({})
     .toArray();
    
    
    
    res.json({
    students
    });
});


app.post("/api/students",async (req,res)=> {
    const { name, age, course } = req.body;

    if(!name || !age || !course) {
        return res.status(400).json(
            { error: "Name, age, and course are required." });
    }

    const newStudent = {  name, age, course };
    // studetns.push(newStudent);
    await mongoose.connection.db
    .collection("students").insertOne(newStudent);
    
    
    res.status(201).json(
        { message: "Student added successfully", student: newStudent });
});


app.delete("/api/students/:id", async (req, res) => {
    const { id } = req.params;

    await mongoose.connection.db
    .collection("students")
    .deleteOne({ _id: new mongoose.Types.ObjectId(id) });
});

app.put("/api/students/:id", async (req, res) => {
    const { id } = req.params;
    const { name, age, course } = req.body;
    if(!name || !age || !course) {
        return res.status(400).json(
            { error: "Name, age, and course are required." });
    }
    await mongoose.connection.db
    .collection("students")
    .updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: { name, age, course } }
    );

    res.json({ message: "Student updated successfully" });
});




app.listen(4000, () => {
    console.log("Express server running on http://localhost:4000");
});