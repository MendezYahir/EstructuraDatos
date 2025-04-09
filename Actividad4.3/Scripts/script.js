function guardarArchivo() {
    const texto = document.getElementById('textToSave').value;
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo.txt';
    a.click();
  
    URL.revokeObjectURL(url);
  }
  