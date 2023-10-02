window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-smaller");
    } else {
        navbar.classList.remove("navbar-smaller");
    }
});
function send(){
    alert("Zpráva byla odeslána");
}