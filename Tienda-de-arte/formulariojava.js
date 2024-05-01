var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');



var from = document.getElementById('formulario');

from.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    var mensajeerror = [];

    if(nombre.value === null || nombre.value === '')
    mensajeerror.push('Ingresa tu nombre')

    if(password.value === null || password.value === '')
    mensajeerror.push('Ingresa tu password')

    error.innerHTML = mensajeerror.join(',') ;

});