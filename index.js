const express=require("express")
const app=express()
const cors=require("cors")
const port=(5000);
const employee={id:"28",name:"cherry",qualification:"CA"}
const students=require("./data.js")

app.use(cors())
app.get("/",(req,res)=>{
	res.send("staring route")
})
app.get("/demo",(req,res)=>{
	res.send("this is demo route")
})
app.get("/emp",(req,res)=>{
	res.json(employee)
})
app.get("/students-lists",(req,res)=>{
	res.json(students)
})

app.listen(port,()=>console.log("server is running on website"))
