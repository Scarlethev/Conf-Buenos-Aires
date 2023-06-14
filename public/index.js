let cantidad = document.getElementById("cantidad");
let categoria = document.querySelector('#categoriasSelect')
let itemCategoria = document.getElementsByClassName("opcion")
let totalApagar = document.getElementById("totalApagar");
let borrar = document.getElementById("borrar")
let resumen = document.getElementById("resumen")
let botonEnviar=document.getElementById("enviar")
let form = document.getElementById("form")

// valor del ticket
let precio = 200;

// Defino los porcentajes
let descuentoDeEstudiante = 0.8
let descuentoDeTrainer = 0.50
let descuentosDeJunior = 0.15


function categorias() {

    precio = 200

    if (categoria.value == "1") {
        precio = precio - (precio * descuentoDeEstudiante)
    }

    else if (categoria.value == "2") {
        precio = precio - (precio * descuentoDeTrainer)
    }

    else if (categoria.value == "3") {
        precio = precio - (precio * descuentosDeJunior)
    }

    else {
        precio = precio;
    }

    return precio

}

totalApagar.addEventListener("click", () => {
    validacion()
    if(nombre.value!= "" && apellido.value != "" && email.value!="" && cantidad.value!= ""){
    categorias()
    totalApagar.innerText = `Total a pagar: $${parseInt(cantidad.value) * precio}`}
})


//BOTON DE BORRAR

borrar.addEventListener("click", function () {
    if(nombre.value !="" || apellido.value !="" || cantidad.value !="" || email.value !="" ){
    form.reset()
    totalApagar.innerText = "Total a Pagar $"
    }

    else{
        Swal.fire("Los campos se encuentran vacios")
    }
})

// BOTON DE RESUMEN

resumen.addEventListener("click", function(){
    if(totalApagar.innerText != "Total a Pagar $"){
    Swal.fire(
    `Estimad@ ${nombre.value} ${apellido.value},
      la compra de ${cantidad.value} tickets son $ ${parseInt(cantidad.value) * precio}`
      )}

      else{
        Swal.fire(
            "Complete sus datos para generar resumen"
          )}

      });


// VALIDACION DE DATOS

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");


function validacion() {
    if (nombre.value == "" && apellido.value== "" && email.value =="" && cantidad.value=="") {
        Swal.fire(
            'Por favor ingresa sus datos para continuar',
          )
    }

    else if (nombre.value == "" ) {
        Swal.fire(
            'Por favor ingresa tu nombre para continuar',
          )
    }

    else if (apellido.value == "") {
        Swal.fire(
            'Por favor ingresa tu apellido para continuar',
          )
    }

    else if (email.value == "") {
        Swal.fire(
            'Por favor ingresa tu email para continuar',
          )
    }

    
    else if (cantidad.value == "") {
        Swal.fire(
            'Por favor ingresa la cantidad para continuar',
          )
    }


}

let nombrePrimer = document.getElementById("nombrePrimer");
let apellidoPrimer = document.getElementById("apellidoPrimer");
let mensaje = document.getElementById("mensaje");

//BOTON ENVIAR

botonEnviar.addEventListener("click", function(){
    if(nombrePrimer.value != "" && apellidoPrimer != "" && mensaje != ""){
        Swal.fire(

        ` Estimada ${nombrePrimer.value} ${apellidoPrimer.value} ,
          Su mensaje se ha enviado satisfactoriamente 
          sussefull`
          )}
    
          else{
            Swal.fire(
                "Complete sus datos para generar resumen"
              )}
    
          });

// console.log(nombrePrimer.value)

// botonEnviar.addEventListener("click", function(e){
//         console.log(nombrePrimer(e)
//       })
    

    // 
    // if(nombrePrimer.value != "" && apellidoPrimer.value != "" && mensaje.value !="")
    // Swal.fire(
    //     'Tus datos han sido cargado con exito!'
    //   )}
    