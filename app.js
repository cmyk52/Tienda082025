console.log("Hola mundo");

import express from 'express';
import cors from 'cors';
import data from './data/data.json' assert {type:'json'}
const app = express();
const PORT = 3000;



//Middlewares
app.use(cors()) //CORS
app.use(express.json()); //JSON



//Routes
app.get("/saludo", (req,res) => {
    res.status(200).send({mensaje:"Hola Jose"})
    
})

app.get("/carta", (req,res)=>{
    
    const articulos = data
    res.status(200).json(articulos)    

})

app.post("/carta", (req,res)=>{
    

    const {nombre, color} = req.body
    if(!nombre || !color){
        res.status(400).json("faltan parametros")
        return
        
    }
    res.status(200).json({name: nombre, color: color})
    

    

})

//Error handling
app.use((req,res)=>{
    res.status(404).send("404 not found")
})



//Server host
app.listen(PORT, ()=>{
    console.log(`host en http://localhost:${PORT}`)
})