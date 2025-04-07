document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabLinks.forEach((button, index) => {
      button.addEventListener("click", () => {
        tabLinks.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(tab => tab.classList.remove("active"));
  
        button.classList.add("active");
        tabContents[index].classList.add("active");
      });
    });
  
    const resultado = document.getElementById("resultado");
  
    document.querySelectorAll(".submit-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const nombre = document.getElementById("nombre")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const comentarios = document.getElementById("comentarios")?.value || "";
        const telefono = document.getElementById("telefono")?.value || "";
  
        resultado.innerHTML = `
          <h3>Datos Ingresados:</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Comentarios:</strong> ${comentarios}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
        `;
      });
    });
  });
  