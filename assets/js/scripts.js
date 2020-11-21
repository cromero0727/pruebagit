// SMOOTH SCROLL 
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
// TOOLTIP 
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// POP OVER 
$(function() {
    $('[data-toggle="popover"]').popover()
})

$(function() {
    $('.example-popover').popover({
        container: 'body'
    })
})