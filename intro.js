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
    document.getElementById("navcontainer-mobile").classList.toggle("show");
}

function closeMenu() {
    document.getElementById("navcontainer-mobile").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if(!event.target.matches('.icon-menu-close')) {
//       let navbar = document.getElementsByClassName("navbar");
//       let i;
//       for (i = 0; i < navbar.length; i++) {
//         let openNavbar = navbar[i];
//         if (openNavbar.classList.contains('show')) {
//           openNavbar.classList.remove('show');
//         }
//       }
//     }
// }