// Imprimir carrito



export function printCarrito(){

    const data = JSON.parse(localStorage.getItem('consolidado')) || []
    const productosImpresos = document.getElementById('productosImpresos')
    let html = ''
    let total = []


    if(data.length === 0){
        html = `<p>No hay productos en el carrito</p>`
        productosImpresos.innerHTML = html;
        printTotal([])
        return
        
    }

    if(data){

        data.forEach(e=>{
                html += `
                <div class="articulosCarrito">
                <p>${e.cantidad}</p>
                <p>${e.nombre}</p>
                <p>$${e.precio}</p>
                <p>$${e.precio * e.cantidad}</p>
                </div>
                `
                total.push(e.precio*e.cantidad)
            })
    }

    
    
    productosImpresos.innerHTML = html
    printTotal(total)
}


// Imprimir el total $ de los productos

function printTotal(total){
    const imprimirTotal = document.getElementById('printTotal')
    let sumaFinal = 0
    
    total.forEach(e =>{
        sumaFinal += e 
    })

    let html = `<p>$${sumaFinal}</p>`
    imprimirTotal.innerHTML = html
    
}

// Limpiar carrito

function limpiarCarrito(){
    
    const btnLimpiarCarrito = document.getElementById('limpiar')
    btnLimpiarCarrito.addEventListener('click',(e)=>{
    localStorage.removeItem('consolidado')
    localStorage.removeItem('productosSeleccionados')

    const productosCanasta = document.getElementById('productosCanasta')

    productosCanasta.innerHTML = 0
    
    printCarrito()
    
})
}

async function main(){
    
    
    printCarrito()
    limpiarCarrito()
    
    

}


main()

