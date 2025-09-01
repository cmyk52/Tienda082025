const submit = document.getElementById('submit')


// Capturar eveto clic a Submit 

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    valores()
})


// Capturar valores del formulario

function valores(){

    const listaValores = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        direccion: document.getElementById('direccion').value,
        numeral: document.getElementById('numeral').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        entrega: document.getElementById('entrega').value

    }

    
    validacionDatos(listaValores)
}

// Validacion de datos

function validacionDatos(datosEvaluados){


    const msjAlert = document.getElementById('error')
    let html = ''



    if( datosEvaluados.nombre === '' || 
        datosEvaluados.apellido === '' || 
        datosEvaluados.direccion === '' || 
        datosEvaluados.numeral === '' || 
        datosEvaluados.telefono === '' ||
        datosEvaluados.correo === '' ||
        datosEvaluados.entrega === '' 
    )
        
        {


        html += 'Faltan campos por completar'
        msjAlert.innerHTML = html
        return

    } 
    


        
        postDatos(datosEvaluados) 


}

async function postDatos(datosEvaluados){
    const productosPagados = JSON.parse(localStorage.getItem('consolidado'))
    const datosContacto = datosEvaluados

    const consolidadoPago = {
        datosContacto: datosContacto,
        productosPagados: productosPagados
    }



    const url = 'http://localhost:3000/pago'

    try{ 
        const res = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },

        body: JSON.stringify({

            consolidadoPago
        })

        

    })
    const response = await res.json()
    console.log(response)
    console.log('succes')

        alert('Pago exitoso')
        


    return

}
    catch(err) {
        
        console.log(err)
        return
    }
   

}

