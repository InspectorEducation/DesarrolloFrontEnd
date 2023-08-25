document.getElementById("computerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe por defecto
    
    // Obtener los valores del formulario
    var codigo = document.getElementById("codigo").value;
    // Agrega aquí las líneas para obtener los demás valores del formulario
    
    // Enviar los datos al backend para insertar en la base de datos (debes implementar esto)
    // Puedes usar fetch() o AJAX para hacer la petición al servidor
    
    // Limpiar el formulario después de enviar
    document.getElementById("codigo").value = "";
    // Agrega aquí las líneas para limpiar los demás campos del formulario
  });