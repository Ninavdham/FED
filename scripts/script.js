// JavaScript Document
console.log("hi");

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




// Selecteer de toggle-knop en het body-element
const toggleButton = document.getElementById('darkModeToggle');
const bodyElement = document.body;

// Controleer of er een modus is opgeslagen in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    bodyElement.classList.add(savedTheme);
    toggleButton.textContent = savedTheme === 'dark-mode' ? 'Switch to light mode' : 'Switch to dark mode';
}

// Voeg een event listener toe aan de toggle-knop
toggleButton.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');

    // Verander de tekst van de knop afhankelijk van de modus
    const currentTheme = bodyElement.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    toggleButton.textContent = currentTheme === 'dark-mode' ? 'Switch to light mode' : 'Switch to dark mode';

    // Sla de modus op in localStorage
    localStorage.setItem('theme', currentTheme);
});



function showCategory(categoryClass, button) {
    // Alle categorieën verbergen
    const allCategories = document.querySelectorAll('.content ul');
    allCategories.forEach(category => category.classList.remove('active-category'));
  
    // Alleen de geselecteerde categorie tonen
    document.querySelector(`.${categoryClass}`).classList.add('active-category');
  
    // De 'active' klasse bijwerken voor de knoppen
    const allButtons = document.querySelectorAll('.buttons input');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }
  