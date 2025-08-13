const url = 'http://localhost:3000/carta'
import { printCarrito } from "./carrito.js"


// Variantes globales




// Fetch

async function getData(){

    try{
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    catch(error){
        console.log(error)
    }

}

// Imprimir productos

async function printProductos(productos){

    const listas = await productos
    const box = document.getElementById("box")

    listas.forEach(element => {

        const div = document.createElement('div')


        const title = document.createElement('h2')
        title.textContent = `${element.nombre}`
        const precio = document.createElement('p')
        precio.textContent = `${element.precio}`
        const boton = document.createElement('button')
        boton.type = 'button'
        boton.textContent = 'Agregar al carro'

        boton.setAttribute('data-sku', `${element.sku}`)
        boton.setAttribute('data-nombre', `${element.nombre}`)
        boton.setAttribute('data-precio', `${element.precio}`)
        boton.setAttribute('data-edicion', `${element.edicion}`)


        box.append(div)
        div.append(title, precio, boton)

        
    });
    
}

// Agregar a carrito

function agregarCarrito(){
    const productosImpresos = document.getElementById('box')
    const seleccion = productosImpresos.querySelectorAll("button")
    
    let productosAgregados = []
    
    
    
// Este loop pushea los productos evaluados en el onclick para agregarlos a la variante global productosAgregados, para tener persistencia en el localStorage
    seleccion.forEach(element =>{
        element.addEventListener('click',(e)=>{
            const sku = e.target.dataset.sku;
            const nombre = e.target.dataset.nombre;
            const precio = e.target.dataset.precio;
            const edicion = e.target.dataset.edicion;
            const seleccionados = {sku, nombre, precio, edicion}

            const memoria = JSON.parse(localStorage.getItem('productosSeleccionados'))
            console.log(memoria)

            productosAgregados.push(seleccionados)

            

            if(!memoria){
                localStorage.setItem('productosSeleccionados', JSON.stringify(productosAgregados))
                
                
            }

            if(memoria){
                let nuevaMemoria = memoria
                nuevaMemoria.push(seleccionados)
                localStorage.setItem('productosSeleccionados', JSON.stringify(nuevaMemoria))
                
                
            }
            consolidarCarrito()
            
            
            
            
        })
        
        
    })
    
}


// Resumen de carrito
function consolidarCarrito() {
    const recuperarLocal = JSON.parse(localStorage.getItem('productosSeleccionados'))
    

    const mapaResumen = {}; // objeto auxiliar para consolidar por SKU

    recuperarLocal.forEach(e => {
        if (!mapaResumen[e.sku]) {
            mapaResumen[e.sku] = {
                sku: e.sku,
                nombre: e.nombre,
                edicion: e.edicion,
                cantidad: 1,
                precio: parseFloat(e.precio)
            };
        } else {
            mapaResumen[e.sku].cantidad += 1;
        }
    });

    // Convertimos el objeto en array para poder guardarlo correctamente
    const resumen = Object.values(mapaResumen);

    // Guardamos y llamamos a la función de impresión
    localStorage.setItem('consolidado', JSON.stringify(resumen));
    
    cuentaCarrito();
    printCarrito()
}


function cuentaCarrito(){

    const data = JSON.parse(localStorage.getItem('productosSeleccionados')) || []
    const productosCanasta = document.getElementById('productosCanasta')
    

    let html = data.length


    productosCanasta.innerHTML = html
    
}

// Launcher

async function main(){
    const productos = await getData()
    await printProductos(productos)
    agregarCarrito()
    cuentaCarrito()
    

}


main()


