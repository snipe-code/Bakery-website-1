// Importing categories from HTML
const navItem1 = document.getElementById('navItem1');
const navItem2 = document.getElementById('navItem2');
const navItem3 = document.getElementById('navItem3');
const navItem4 = document.getElementById('navItem4');
const navItem5 = document.getElementById('navItem5');
const navItem6 = document.getElementById('navItem6');
// Importing category's items from HTML
const menuCat1 = document.getElementsByClassName('menuCat1');
const menuCat2 = document.getElementsByClassName('menuCat2');
const menuCat3 = document.getElementsByClassName('menuCat3');
const menuCat4 = document.getElementsByClassName('menuCat4');
const menuCat5 = document.getElementsByClassName('menuCat5');
const menuTitle = document.getElementById('menuTitle');
// Defining needed variables
let selectedCat = navItem1;

// Main function
function selectCategory(event) {
    // Clearing the previously selected category
    selectedCat.classList.remove('catSelected');
    selectedCat = event.target;
    selectedCat.classList.add('catSelected');

    menuCategory = event.target.name;
    menuTitle.textContent = menuCategory;

    // Hide all menu categories
    const menuCategories = [menuCat1, menuCat2, menuCat3, menuCat4, menuCat5];
    menuCategories.forEach(category => {
        Array.from(category).forEach(item => item.style.display = 'none');
    });

    // Show the items of the selected category
    if (event.target === navItem1) {
        Array.from(menuCat1).forEach(item => item.style.display = 'flex');
    }
    else if (event.target === navItem2) {
        Array.from(menuCat2).forEach(item => item.style.display = 'flex');
    }
    else if (event.target === navItem3) {
        Array.from(menuCat3).forEach(item => item.style.display = 'flex');
    }
    else if (event.target === navItem4) {
        Array.from(menuCat4).forEach(item => item.style.display = 'flex');
    }
    else if (event.target === navItem5) {
        Array.from(menuCat5).forEach(item => item.style.display = 'flex');
    }
}