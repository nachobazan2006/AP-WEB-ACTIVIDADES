// Actividad 11: funciones y funciones flecha.
// La seccion 2-b se completo por inferencia: el ejemplo de referencia termina
// en ese encabezado y no incluye la consigna original.

// 1-a: funcion sin parametros.
function saludar() {
    console.log('Hola, bienvenido');
}

saludar();

// 1-b: funcion con un parametro.
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}, bienvenido`);
}

saludarPersona('Nacho');

// 1-c: funcion que devuelve un valor booleano.
function esMayorDeEdad(edad) {
    if (edad < 18) {
        return false;
    }

    return true;
}

console.log(esMayorDeEdad(15));

// 2-a: la misma comprobacion escrita como funcion flecha.
const esMayorDeEdadFlecha = (edad) => {
    if (edad < 18) {
        return false;
    }

    return true;
};

console.log(esMayorDeEdadFlecha(19));

// 2-b: saludo con parametro escrito como funcion flecha (inferido).
const saludarPersonaFlecha = (nombre) => {
    console.log(`Hola ${nombre}, bienvenido`);
};

saludarPersonaFlecha('Nacho');
