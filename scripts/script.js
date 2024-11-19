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



















document.querySelectorAll('.buttons input').forEach(button => {
  button.addEventListener('click', function() {
    // Verwijder active class van de buttons
    document.querySelectorAll('.buttons input').forEach(btn => btn.classList.remove('active'));
    // Voeg active class toe aan geklikte button
    this.classList.add('active');

    // Verberg alle content sections
    document.querySelectorAll('.content ul').forEach(ul => ul.classList.remove('active-category'));

    // Toon de content die valt onder de button
    const category = this.value.split(' ')[0].toLowerCase(); // e.g., "albums" from "Albums (7)"
    const target = document.querySelector(`.${category}`);
    if (target) {
      target.classList.add('active-category');
    }
  });
});

  
  