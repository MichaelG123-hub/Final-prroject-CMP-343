import express from "express"
import mysql from "mysql2"
import dotenv from "dotenv";
dotenv.config();


const app = express()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

app.get("/", (req,res)=>{
res.json("hello this is the backend")
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
    const values = [
        "title from backend",
        "desc from backend",
        "cover pic from backend",
    ];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been created successfully");
    });
});

app.listen(3000, ()=>{
    console.log("Connected to backend")
})