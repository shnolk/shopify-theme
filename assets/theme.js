var prevPos = window.pageYOffset;

window.onscroll = function() {
    var currentPos = window.pageYOffset;
    if (prevPos < currentPos && currentPos > 250) {
        document.getElementById("nav").classList.add('nav-hidden');
    } else {
        document.getElementById("nav").classList.remove('nav-hidden');
    }
    prevPos = currentPos
}