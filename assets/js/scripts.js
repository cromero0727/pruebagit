$(function() {

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function() {
                window.location.hash = gato;
            });
        }
    });
});
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// var cambio = document.getElementById("cambio");
// var seccionquiensoy = document.getElementById("quiensoy");
// var header = document.getElementById("header-cr");


// cambio.addEventListener("click", function() {
//     seccionquiensoy.classList.add('cambiocolor');
// });






// var parrafoDos = document.getElementById("par-2");
// var parrafoCuatro = document.getElementById("par-4");
// var parrafoTres = document.getElementById("par-3");

// parrafoDos.addEventListener("click", function() {
//     parrafoCuatro.classList.toggle("good");
// });
// parrafoTres.addEventListener("click", function() {
//     parrafoCuatro.classList.toggle("succes");
// });