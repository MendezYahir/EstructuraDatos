const formulario = document.getElementById('formulario');
const tabla = document.querySelector('#tablaDatos tbody');
let datos = [];

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const edad = document.getElementById('edad').value;

  if (!nombre || !correo || !edad) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const persona = { nombre, correo, edad };
  datos.push(persona);
  mostrarDatos();
  formulario.reset();
});

function mostrarDatos() {
  tabla.innerHTML = '';
  datos.forEach((item, index) => {
    let fila = `
      <tr>
        <td>${item.nombre}</td>
        <td>${item.correo}</td>
        <td>${item.edad}</td>
        <td class="actions">
          <button onclick="editar(${index})">Editar</button>
          <button onclick="eliminar(${index})">Eliminar</button>
        </td>
      </tr>
    `;
    tabla.innerHTML += fila;
  });
}

function eliminar(index) {
  if (confirm("¿Deseas eliminar este registro?")) {
    datos.splice(index, 1);
    mostrarDatos();
  }
}

function editar(index) {
  const persona = datos[index];
  document.getElementById('nombre').value = persona.nombre;
  document.getElementById('correo').value = persona.correo;
  document.getElementById('edad').value = persona.edad;
  eliminar(index); 
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', () => {
    input.style.borderColor = input.value ? '#28a745' : '#dc3545';
  });
});
