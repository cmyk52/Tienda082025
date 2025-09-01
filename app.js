import express from 'express';
import cors from 'cors';
import routerPago from './rutas/pago.js'
import routerCarta from './rutas/carta.js'

const app = express();
const PORT = 3000;




//Middlewares
app.use(cors()) //CORS
app.use(express.json()); //JSON



//Routes

app.use("/carta", routerCarta)
app.use("/pago", routerPago)


//Error handling
app.use((req,res)=>{
    res.status(404).send("404 not found")
})



//Server host
app.listen(PORT, ()=>{
    console.log(`host en http://localhost:${PORT}`)
})