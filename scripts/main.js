//  L Rurua
//  14/12/2023
//  JS bestand voor project Portfolio

// Zoekt op welke pagina je bent.
var currentPage = window.location.href;

// Variable voor dorpdown menu
var menuText = document.getElementById("menu");

// zoekt op welke pagina gebruiker is op en veranderd text accordingly.
if(currentPage.includes("index.html"))
{
    menuText.innerHTML = "Home";
}
else if(currentPage.includes("profile.html"))
{
    menuText.innerHTML = "Profile";
}
else if(currentPage.includes("products.html"))
{
    menuText.innerHTML = "Shop";
}
else if(currentPage.includes("newstand.html"))
{
    menuText.innerHTML = "Newstand";
}
else if(currentPage.includes("basket.html"))
{
    menuText.innerHTML = "Basket (3)";
}


