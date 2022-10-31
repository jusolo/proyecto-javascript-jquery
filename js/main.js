$(document).ready(function (params) {

    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    if (window.location.href.indexOf('index') > -1) {
        //Posts
        var post = [
            {
                title: "Prueba de titulo 1",
                date: "Publicado el " + moment().format('LLLL'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque quis libero eget varius. Sed eleifend, est at blandit consectetur, diam justo molestie urna, nec venenatis mauris nulla dictum ipsum. Duis maximus euismod quam sed euismod. Quisque sodales lacus sem, quis maximus justo sollicitudin sit amet. Aenean elementum fringilla mauris in feugiat. Etiam eget nibh quam. Nulla erat dolor, posuere id vestibulum nec, fringilla nec est. Donec at scelerisque neque. Curabitur non dolor nec nisl sollicitudin venenatis nec nec sem. Vivamus at viverra est, eu pellentesque leo."
            },
            {
                title: "Prueba de titulo 2",
                date: "Publicado el " + moment().format('LLLL'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque quis libero eget varius. Sed eleifend, est at blandit consectetur, diam justo molestie urna, nec venenatis mauris nulla dictum ipsum. Duis maximus euismod quam sed euismod. Quisque sodales lacus sem, quis maximus justo sollicitudin sit amet. Aenean elementum fringilla mauris in feugiat. Etiam eget nibh quam. Nulla erat dolor, posuere id vestibulum nec, fringilla nec est. Donec at scelerisque neque. Curabitur non dolor nec nisl sollicitudin venenatis nec nec sem. Vivamus at viverra est, eu pellentesque leo."
            },
            {
                title: "Prueba de titulo 3",
                date: "Publicado el " + moment().format('LLLL'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque quis libero eget varius. Sed eleifend, est at blandit consectetur, diam justo molestie urna, nec venenatis mauris nulla dictum ipsum. Duis maximus euismod quam sed euismod. Quisque sodales lacus sem, quis maximus justo sollicitudin sit amet. Aenean elementum fringilla mauris in feugiat. Etiam eget nibh quam. Nulla erat dolor, posuere id vestibulum nec, fringilla nec est. Donec at scelerisque neque. Curabitur non dolor nec nisl sollicitudin venenatis nec nec sem. Vivamus at viverra est, eu pellentesque leo."
            },
            {
                title: "Prueba de titulo 4",
                date: "Publicado el " + moment().format('LLLL'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque quis libero eget varius. Sed eleifend, est at blandit consectetur, diam justo molestie urna, nec venenatis mauris nulla dictum ipsum. Duis maximus euismod quam sed euismod. Quisque sodales lacus sem, quis maximus justo sollicitudin sit amet. Aenean elementum fringilla mauris in feugiat. Etiam eget nibh quam. Nulla erat dolor, posuere id vestibulum nec, fringilla nec est. Donec at scelerisque neque. Curabitur non dolor nec nisl sollicitudin venenatis nec nec sem. Vivamus at viverra est, eu pellentesque leo."
            },
            {
                title: "Prueba de titulo 5",
                date: "Publicado el " + moment().format('LLLL'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque quis libero eget varius. Sed eleifend, est at blandit consectetur, diam justo molestie urna, nec venenatis mauris nulla dictum ipsum. Duis maximus euismod quam sed euismod. Quisque sodales lacus sem, quis maximus justo sollicitudin sit amet. Aenean elementum fringilla mauris in feugiat. Etiam eget nibh quam. Nulla erat dolor, posuere id vestibulum nec, fringilla nec est. Donec at scelerisque neque. Curabitur non dolor nec nisl sollicitudin venenatis nec nec sem. Vivamus at viverra est, eu pellentesque leo."
            }
        ];

        post.forEach((item, index) => {
            var post = `
        <article class="post">
            <h2 class="titulo">${item.title}</h2>
            <span class="fecha">${item.date}</span>
            <p class="parrafo">${item.content}</p>
            <a href="#" class="btn btn-mas">Leer mas</a>
        </article>
    `;
            $("#posts").append(post);
        });

    };

    //Select-Themes
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba
    $(".subir").click(function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function () {
        var user = $("#user").val();
        localStorage.setItem("user", user);
    });

    var user = localStorage.getItem("user");

    if (user != null && user != "undefined") {
        var about = $("#about p");

        about.html("Hola, Soy " + user);
        $("#login").hide();

        about.append("<a href='#' id='logout'> Cerrar sesion </a>");
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });

    };

    //Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    };


    //reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    };

    //Validacion
    if (window.location.href.indexOf('contact') > -1) {
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    };
    
});