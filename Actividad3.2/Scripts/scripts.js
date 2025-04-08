const formulario = document.getElementById("formulario");
const listaContactos = document.getElementById("lista-contactos");
const buscador = document.getElementById("buscador");

let contactos = [];
let editando = false;
let indiceEdicion = null;

//funcion de validaciones
function validarContacto(nombre, telefono, correo) {
  const regexTelefono = /^[0-9]{7,15}$/;
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nombre || !telefono || !correo) return false;
  if (!regexTelefono.test(telefono)) return false;
  if (!regexCorreo.test(correo)) return false;

  return true;
}

//funcion para agregar o editar contacto
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (!validarContacto(nombre, telefono, correo)) {
    alert("Por favor completa los campos correctamente.");
    return;
  }

  const nuevoContacto = { nombre, telefono, correo };

  if (editando) {
    contactos[indiceEdicion] = nuevoContacto;
    editando = false;
    indiceEdicion = null;
  } else {
    contactos.push(nuevoContacto);
  }

  formulario.reset();
  mostrarContactos();
});

//funcion para mostrar contactos
function mostrarContactos(filtrados = contactos) {
  listaContactos.innerHTML = "";
  filtrados.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "contacto";
    div.innerHTML = `
      <p><strong>Nombre:</strong> ${c.nombre}</p>
      <p><strong>Teléfono:</strong> ${c.telefono}</p>
      <p><strong>Correo:</strong> ${c.correo}</p>
      <button class="editar" onclick="editarContacto(${index})">Editar</button>
      <button class="eliminar" onclick="eliminarContacto(${index})">Eliminar</button>
    `;
    listaContactos.appendChild(div);
  });
}

//funcion para editar contacto
function editarContacto(index) {
  const contacto = contactos[index];
  document.getElementById("nombre").value = contacto.nombre;
  document.getElementById("telefono").value = contacto.telefono;
  document.getElementById("correo").value = contacto.correo;

  editando = true;
  indiceEdicion = index;
}

//funcion para eliminar contacto
function eliminarContacto(index) {
  if (confirm("¿Deseas eliminar este contacto?")) {
    contactos.splice(index, 1);
    mostrarContactos();
  }
}

//funcion de busqueda dinamica
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = contactos.filter(c =>
    c.nombre.toLowerCase().includes(texto) ||
    c.correo.toLowerCase().includes(texto)
  );
  mostrarContactos(filtrados);
});
