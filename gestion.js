let habitaciones = []

function menuPrincipal(){
    let opc = prompt(
        "************* HOTEL*************\n"+
        "1. Registrar nueva habitacion\n"+
        "2. Lista de habitaciones\n"+
        "3. Buscar habitacion por numero\n"+
        "4. Cambiar estado de una habitacion\n"+
        "5. eliminar habitacion\n"+
        "6. salir"
    );

    switch(opc){
        case "1":
            registrarHabitacion(menuPrincipal);
            break;
        case "2":
            ListaHabitaciones(menuPrincipal);
            break;
        case "3":
            buscarHabitacionNumero(menuPrincipal);
            break;
        case "4":
            CambiarEstadoHabitacion(menuPrincipal);
            break;
        case "5":
            eliminarHabitacion(menuPrincipal);
            break;
        case "6":
            console.log("Salir!")
            break;
        default:
            console.log("Opcion no valida, intente de nuevo");
            menuPrincipal();
    }
}
menuPrincipal()

function registrarHabitacion(callback){
    let numero = prompt("Numero de habitacion: ")
    let tipo  = prompt("sencilla, doble, suie: ")
    let precioNoche = prompt("precio por noche: ")
    let estado = prompt("Libre, ocupado o limpieza: ")
    let huesped;
    if(estado.toLowerCase() === "libre"){
        huesped = "";
    } else {
        huesped = prompt("Nombre del huesped: ");
    }
    
    let habitacion = {numero, tipo, precioNoche, estado, huesped};

    console.log("Validando Información de la habitación...");
    setTimeout(function(){
        habitaciones.push(habitacion);
        console.log("habitacion"+ numero + " registrada");
        callback();
    }, 2000)
}
function ListaHabitaciones(callback){
    if(habitaciones.length === 0){
        console.log("No existen registros");
        callback();
    } else {
        console.log("Lista de habitaciones:");
        habitaciones.forEach(function(habitacion){
            console.log(habitacion.numero + " - " + habitacion.tipo + " - " + habitacion.precioNoche + " - " + habitacion.estado + " - " + habitacion.huesped);
        });
        callback();
    }
}
