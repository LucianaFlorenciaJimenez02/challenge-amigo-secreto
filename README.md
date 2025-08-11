# 🎁 Challenge One: Amigo Secreto

**Amigo Secreto** es una página web interactiva que permite organizar sorteos de amigos secretos de forma rápida y sencilla. Perfecto para celebraciones, intercambios de regalos o para divertirse con amigos.

---

## 🌟 Funcionalidades

- ✅ ***Agregar*** nombres de participantes a una lista.
- 🎲 ***Sortear*** aleatoriamente un amigo secreto.
- 🔄 ***Reiniciar*** la lista y comenzar un nuevo sorteo.
- 👌 ***Valida*** si contiene nombres vacios.

---

## 🗂️ Estructura de Archivos

<ul>├── index.html # Estructura principal de la página.</ul>
<ul> ├── style.css # Estilos visuales de la interfaz.</ul>
<ul> ├── script.js # Lógica del funcionamiento en JavaScript.</ul>
<ul>└── /assets #  Carpeta con imágenes utilizadas en la interfaz.</ul>


---

## ⚙️ Cómo Funciona

1. El usuario ingresa nombres en un campo de texto.
2. Al hacer clic en “Agregar”, el nombre se añade a una lista visible.
3. Al presionar “Sortear amigo”, se elige aleatoriamente uno de los nombres como “amigo secreto”.
4. El botón “Actualizar” limpia la lista y permite comenzar de nuevo.


https://github.com/user-attachments/assets/45ff67d4-ddea-47cd-98a1-7b03fc564bb0


---

## 🧠 Lógica del Código JavaScript

### Variables principales

    const input_amigo = document.getElementById("amigo");
    const lista_amigos = [];
    const ul_lista_amigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

<li>input_amigo: campo de texto donde el usuario escribe el nombre.</li>
<li>lista_amigos: arreglo que almacena los nombres ingresados.</li>
<li>ul_lista_amigos: lista visual que muestra los nombres en pantalla.</li>
<li>resultado: área donde se muestra el amigo secreto sorteado.</li>


### Función agregarAmigo()

    function agregarAmigo(){
        if (input_amigo.value == "") {
           alert("ERROR. Por favor, ingrese un nombre.");
        } else {
           lista_amigos.push(input_amigo.value);
          ul_lista_amigos.innerHTML += `<li>${input_amigo.value}</li>`;
        }
    }

<li>Verifica que el campo no esté vacío.</li>
<li>Agrega el nombre al arreglo lista_amigos.</li>
<li>Actualiza la lista visual en la página.</li>

### Función sortearAmigo()

    function sortearAmigo(){
    const amigo_aleatorio = Math.floor(Math.random() * lista_amigos.length);
    const amigo_secreto = lista_amigos[amigo_aleatorio];
    resultado.innerHTML = `<li>El amigo secreto es: ${amigo_secreto}</li>`;
    }

<li>Genera un índice aleatorio dentro del arreglo.</li>
<li>Selecciona un nombre como “amigo secreto”.</li>
<li>Muestra el resultado en pantalla.</li>

### Función actualizar()

    function actualizar() {
      lista_amigos.length = 0;
      ul_lista_amigos.innerHTML = "";
      resultado.innerHTML = "";
      input_amigo.value = "";
    }


<li>Vacía el arreglo y los elementos visuales.</li>
<li>Permite reiniciar el proceso.</li>

---
¡Diviértete sorteando con tus amigos!
