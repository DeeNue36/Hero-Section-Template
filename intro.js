// function openMenu() {
//     document.getElementById("navcontainer-mobile").style.width = "80%";
//     document.getElementById("navcontainer-mobile").style.boxShadow = "-20px 20px 400px 200px rgba(0, 0, 0, 0.6)";
// }
  
// function closeMenu() {
//     document.getElementById("navcontainer-mobile").style.width = "";
//     document.getElementById("navcontainer-mobile").style.boxShadow = "";
// }

// When the user clicks on the button, toggle between hiding and showing the dropdown content //

function openMenu() {
    document.getElementById("navcontainer-mobile").classList.add("show");
}

function closeMenu() {
    document.getElementById("navcontainer-mobile").classList.remove("show");
}
