const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")

const collection = require("./mongodb")
const tempelatepath = path.join(__dirname,'../template')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);


 
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatepath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(publicPath))


app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.get("/about",(req,res)=>{
    res.render("about")
})


app.get("/alert",(req,res)=>{
    res.render("alert")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/disaster",(req,res)=>{
    res.render("disaster")
})

app.get("/earthquakes",(req,res)=>{
    res.render("earthquakes")
})

app.get("/govt",(req,res)=>{
    res.render("govt")
})

app.get("/HURR&CYCLON",(req,res)=>{
    res.render("HURR&CYCLON")
})

app.get("/resources",(req,res)=>{
    res.render("resources")
})



app.get("/index",(req,res)=>{
    res.render("index")
})

app.get("/services",(req,res)=>{
    res.render("services")
})



app.post("/signup",async (req,res)=>{
const data={
    name:req.body.name,
    password:req.body.password
}
await collection.insertMany([data])

// res.render("home")
res.render("index")



})

app.post("/login",async (req,res)=>{
    
   try{const check= await collection.findOne({name:req.body.name})
   if(check.password===req.body.password){
    
res.render("index")

   }
   else{
    res.send("wroong")
   }
   }
    
   catch{
    res.send("wrong")
   }
    
    })

app.listen(5000,()=>{
console.log("port connected");
})
