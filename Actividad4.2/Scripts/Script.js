function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    
    if (file) {
      document.getElementById('fileInfo').innerHTML = `
        <h5>Archivo seleccionado:</h5>
        <p><strong>Nombre:</strong> ${file.name}</p>
        <p><strong>Tamaño:</strong> ${file.size} bytes</p>
        <p><strong>Tipo:</strong> ${file.type}</p>
      `;
    }
  }
  
  function downloadFile() {
    const content = 'Este es un archivo generado dinámicamente por JavaScript.';
    const blob = new Blob([content], { type: 'text/plain' });
    
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'archivo_generado.txt';
    link.click();
    
    URL.revokeObjectURL(url);
  }
  