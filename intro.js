function openMenu() {
    document.getElementById("navcontainer-mobile").style.width = "80vw";
    document.getElementById("navcontainer-mobile").classList.add("box-shadow");
}

  
function closeMenu() {
    document.getElementById("navcontainer-mobile").style.width = "";
    document.getElementById("navcontainer-mobile").classList.remove("box-shadow");
}
 
//Alternative menu style
// When the user clicks on the button, toggle between hiding and showing the dropdown content //

// function openMenu() {
//     document.getElementById("navcontainer-mobile").classList.add("show");
// }

// function closeMenu() {
//     document.getElementById("navcontainer-mobile").classList.remove("show");
// }
