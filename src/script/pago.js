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
    console.log(msjAlert)


    if( datosEvaluados.nombre === '' || 
        datosEvaluados.apellido === '' || 
        datosEvaluados.direccion === '' || 
        datosEvaluados.numeral === '' || 
        datosEvaluados.telefono === '' ||
        datosEvaluados.correo === '' ||
        datosEvaluados.entrega === '' 
    )
        
        {

        console.log('faltan datos')
        html += 'Faltan campos por completar'
        msjAlert.innerHTML = html
        return

    } 
    
    else 
        {
        console.log('valores ok')
        html += ''
        msjAlert.innerHTML = html
    }


}

