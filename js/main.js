$(document).ready(function() {

    //Slider
    if (window.location.href.indexOf('index') > 0) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
        });

    }

    //Posts
    if (window.location.href.indexOf('index') > 0) {

        var posts = [{
                title: 'Prueba de titulo 1',
                date: new Date(),
                texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eum pariatur repellat, ipsa nesciunt ab nulla doloremque repellendus dolorum ullam facilis debitis aliquam a culpa aliquid iusto quo maxime sed!'
            },
            {
                title: 'Prueba de titulo 2',
                date: new Date(),
                texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eum pariatur repellat, ipsa nesciunt ab nulla doloremque repellendus dolorum ullam facilis debitis aliquam a culpa aliquid iusto quo maxime sed!'
            },
            {
                title: 'Prueba de titulo 3',
                date: new Date(),
                texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eum pariatur repellat, ipsa nesciunt ab nulla doloremque repellendus dolorum ullam facilis debitis aliquam a culpa aliquid iusto quo maxime sed!'
            },
            {
                title: 'Prueba de titulo 4',
                date: new Date(),
                texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eum pariatur repellat, ipsa nesciunt ab nulla doloremque repellendus dolorum ullam facilis debitis aliquam a culpa aliquid iusto quo maxime sed!'
            },
            {
                title: 'Prueba de titulo 5',
                date: new Date(),
                texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eum pariatur repellat, ipsa nesciunt ab nulla doloremque repellendus dolorum ullam facilis debitis aliquam a culpa aliquid iusto quo maxime sed!'
            },
            {
                title: 'Prueba de titulo 6',
                date: new Date(),
                texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eum pariatur repellat, ipsa nesciunt ab nulla doloremque repellendus dolorum ullam facilis debitis aliquam a culpa aliquid iusto quo maxime sed!'
            },
        ];

        posts.forEach((elemento, index) => {
            var post = `
                     <article class="post mt-4">
                        <h2 class="font-weight-bold">${elemento.title}</h2>
                        <span class="mt-3 date ">Fecha de publicacion: ${elemento.date}</span>
                        <p class="mt-3">${elemento.texto}</p>
                        <a href="#" class="btn btn-success">Leer mas</a>
                    </article>`;


            $("#post").append(post);

        });
    }


    $("#inicio").click((e) => {
        e.preventDefault();


        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login falso
    $("#login form").submit(function(e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var email = $("#email").val();
        var pass = $("#pass").val();

        localStorage.setItem("name", nombre);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", pass);

        //Agregando animacion a la aparicion del About

        location.reload();


    });

    var name = localStorage.getItem("name");

    if (name != null && name != "undefine") {
        var about_name = $("#about p");
        about_name.html("<br><strong>Bienvenido, " + name + "</strong><br>");
        about_name.append("<a href='#' id='logout' class='ml-2 float-right btn btn-danger mt-3'>Cerrar sesion</a>");

        $("#login").hide();
    }

    $("#logout").click(() => {
        var about_name = $("#about p");
        about_name.html("<p class='mt-2 text-justify'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.Atque eum pariatur repellat, </p>");
        $("#login").show();
        localStorage.clear();
        location.reload();
    });

    if (window.location.href.indexOf('about') > 0) {
        $("#acordeon").accordion();
    }


    //Validacion
    if (window.location.href.indexOf('contacto') > 0) {

        $("form input[name='fecha']").datepicker();
        $.validate({
            lang: 'es'
        });


    }
});