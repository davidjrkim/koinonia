$('#album').turn({gradients: true, acceleration: true});

// alert("책 모서리를 누르거나 잡고 다음 페이지로 넘길수있습니다")

var zoomreset = function() {
    var viewport = document.querySelector("meta[name='viewport']");
    viewport.content = "width=650, maximum-scale=0.635";
    setTimeout(function() {
        viewport.content = "width=650, maximum-scale=1";
    }, 350);
}

window.addEventListener("orientationchange", function(event) {
    setTimeout(zoomreset, 150);
});
