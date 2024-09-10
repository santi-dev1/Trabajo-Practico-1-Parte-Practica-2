document.getElementById('miFormulario').addEventListener('submit', function(evento) {
    evento.preventDefault();

    let datosFormulario = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('email').value,
        clave: document.getElementById('password').value,
        opcionElegida: document.getElementById('cosas').value
    };

    console.log(datosFormulario);
});


fetch('opciones.json')
    .then(respuesta => respuesta.json())
    .then(info => {
        let miSelect = document.getElementById('cosas');
        info.opciones.forEach(item => {
            let nuevaOpcion = document.createElement('option');
            nuevaOpcion.value = item.valor;
            nuevaOpcion.textContent = item.texto;
            miSelect.appendChild(nuevaOpcion);
        });
    })
    .catch(error => console.error('Error cargando las opciones:', error));