import express from 'express'
const routerPago = express.Router()


routerPago.post("/", (req, res)=>{
    const {consolidadoPago} = req.body
    res.json({mensaje: 'Pago recibido con exito'})
    console.log(req.body)

    console.log(consolidadoPago)
})


export default routerPago;

