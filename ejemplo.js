console.log("Hola, estoy enlazado!")

const formulario = document.getElementById("formulario")
const productoInput = document.getElementById("producto-input")
const lista = document.getElementById("lista")

let listaDeProductos = []
let productoActual = ""

function verificarProductosEnAlmacenamiento() {
  const productos = localStorage.getItem("productos")

  if(productos) {
    listaDeProductos = JSON.parse(productos) 
    renderizarProductos()
  } 
}

function renderizarProductos() {
  lista.innerHTML = ``

  listaDeProductos.forEach((producto) => {
    const li = document.createElement("li")
    li.innerHTML = `
      <p>${producto}</p>
      <button onclick='eliminarProducto("${producto}")'>X</button>
    `

    lista.appendChild(li)
  })
}

function eliminarProducto(producto) {
  listaDeProductos = listaDeProductos.filter((elemento) => elemento != producto)
  localStorage.setItem("productos", JSON.stringify(listaDeProductos))

  renderizarProductos()
}

productoInput.addEventListener("keyup", (e) => {
  const productoSiendoEscrito = e.target.value
  productoActual = productoSiendoEscrito
})

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  listaDeProductos.push(productoActual)
  localStorage.setItem("productos", JSON.stringify(listaDeProductos))

  renderizarProductos()

  productoInput.value = ""
})

verificarProductosEnAlmacenamiento()