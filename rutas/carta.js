import express from 'express'
import data from '../data/data.json' assert {type:'json'}
const routerCarta = express.Router()


routerCarta.get("/", (req,res)=>{
    
    const articulos = data
    res.status(200).json(articulos)    

})

export default routerCarta;