//===================================================//
//                      Navbar                       //
//===================================================//
window.onscroll = function() {
    var containerH = document.getElementById('headerr');
    if (window.scrollY > 1) { // Ajuste este valor conforme necessário
        containerH.style.backgroundColor = "#0B0101";
    } else {
        containerH.style.backgroundColor = "transparent";
    }
};