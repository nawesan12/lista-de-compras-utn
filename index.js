console.log("Hola, estoy enlazado!")

const showAlertButton = document.getElementById("show-alert-button")
const changeBackgroundOfElementButton = document.getElementById("change-background-of-element-button")

const parrafoActividad2 = document.getElementById("actividad2-parrafo")

showAlertButton.addEventListener("click", () => {
  alert("Hola, soy la alerta de la actividad 1!")
})

changeBackgroundOfElementButton.addEventListener("click", () => {
  parrafoActividad2.classList.toggle("color2")
})











const inputNombre = document.getElementById("input-nombre")
const inputCorreo = document.getElementById("input-correo")
const formulario = document.getElementById("formulario")

const parrafoDatosDelUsuario = document.getElementById("datos-del-usuario")
const ventanaActividad3 = document.getElementById("actividad3-layout")

const datosDelUsuario = {
  nombre: "",
  correo: ""
}

inputNombre.addEventListener("keyup", (e) => {
  const nombreSiendoEscrito = e.target.value
  datosDelUsuario.nombre = nombreSiendoEscrito
})

inputCorreo.addEventListener("keyup", (e) => {
  const correoSiendoEscrito = e.target.value
  datosDelUsuario.correo = correoSiendoEscrito
})

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  ventanaActividad3.classList.add("visible")
  parrafoDatosDelUsuario.innerText = `Nombre: ${datosDelUsuario.nombre} \n Correo: ${datosDelUsuario.correo}`

  setTimeout(() => {
    ventanaActividad3.classList.remove("visible")
  }, 3500)
})


