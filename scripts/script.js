// JavaScript Document
console.log("hi");

// Hamburger Menu
const menuOpenButton = document.querySelector("header > button");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = openMenu;

function openMenu(){
  deNav.classList.add("toonMenu")
}

const menuSluitButton = document.querySelector("nav button");
menuSluitButton.onclick = sluitMenu;

function sluitMenu(){
    deNav.classList.remove("toonMenu")
}
















// Darkmode
const toggleButton = document.getElementById('darkModeToggle');
const bodyElement = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    bodyElement.classList.add(savedTheme);
    toggleButton.textContent = savedTheme === 'dark-mode' ? 'Switch to light mode' : 'Switch to dark mode';
}

toggleButton.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');

    const currentTheme = bodyElement.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    toggleButton.textContent = currentTheme === 'dark-mode' ? 'Switch to light mode' : 'Switch to dark mode';

    localStorage.setItem('theme', currentTheme);
});




















//Filter/selectie modus "Releases"

function showCategory(categoryClass, button) {
    const allCategories = document.querySelectorAll('.content ul');
    allCategories.forEach(category => {
      category.classList.remove('active-category');
      category.style.display = 'none';
    });

    const selectedCategory = document.querySelector('.${categoryClass}');
    if (selectedCategory){
      selectedCategory.classList.add('active-category');
      selectedCategory.style.display = 'block';
    }

    const allButtons = document.querySelectorAll('.buttons input');
    allButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
  }

  document.querySelectorAll('.button input').forEach(button => {
    button.addEventListener('click', function(){
      const categoryClass = button.value.toLowerCase().replace(/ & | \(|\)|\s/g, '-').replace(/--/g, '-');
        showCategory(categoryClass, button);
    });
  });

  // Voeg event listeners toe aan de knoppen
document.querySelectorAll('.buttons input').forEach(button => {
  button.addEventListener('click', function() {
      // Haal de categorieklasse op basis van de knopwaarde
      const categoryClass = button.value.toLowerCase().replace(/ & | \(|\)|\s/g, '-').replace(/--/g, '-');
      
      // Roep de showCategory-functie aan met de juiste parameters
      showCategory(categoryClass, button);
  });
});

  
  