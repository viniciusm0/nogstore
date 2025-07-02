const searchInput = document.getElementById('search');

const classesAnimadas = document.querySelectorAll('.fadein-transformY');

searchInput.addEventListener('input', (event) => {
  const value = formatString(event.target.value);
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const h2 = item.querySelector('h2'); 
    const texto = formatString(h2?.textContent || '');

    if (texto.includes(value)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

classesAnimadas.forEach(ca => {
    ca.addEventListener("animationend", () => {
        ca.classList.remove("fadein-transformY")
    });
});
function formatString(value) {
  return value.toLowerCase().trim();
}






