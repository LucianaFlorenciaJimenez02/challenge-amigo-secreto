// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const input_amigo = document.getElementById("amigo");
const lista_amigos = [];
const ul_lista_amigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo(){

    if (input_amigo.value == "") {
        alert("ERROR. Por favor, ingrese un nombre.");
    } else {
        lista_amigos.push(input_amigo.value);
        ul_lista_amigos.innerHTML += `<li>${input_amigo.value}</li>`

    }
}

function sortearAmigo(){

    const amigo_aleatorio = Math.floor(Math.random() * lista_amigos.length);
    const amigo_secreto = lista_amigos[amigo_aleatorio];
    resultado.innerHTML = `<li>El amigo secreto es: ${amigo_secreto}</li>`

}

function actualizar() {
    
    lista_amigos.length = 0;
    ul_lista_amigos.innerHTML = "";
    resultado.innerHTML = "";
    input_amigo.value = "";
}