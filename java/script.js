function toggleForm() {
    var formulario = document.getElementById("formulario");
    formulario.classList.toggle("hidden");
}


document.addEventListener('DOMContentLoaded', function() {
  const marcaElements = document.querySelectorAll('.marca');
  marcaElements.forEach(element => {
    element.style.border = '2px solid grey';
    element.style.boxShadow = '2px 2px 5px grey';
    element.style.display = 'inline-block';
    element.style.margin = '10px'; // Ajusta el margen entre los cuadros
    element.style.textAlign = 'center';
  });
});