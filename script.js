document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       FORMULARIO
    ========================= */

    const formulario = document.querySelector(".formulario-contacto");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const apellido = document.getElementById("apellido").value.trim();

            alert(
                "¡Gracias, " + nombre + " " + apellido +
                "! Tu mensaje ha sido enviado correctamente. 🍓"
            );

            formulario.reset();
        });
    }


/* =========================
   GALERÍA
========================= */

const fotos = document.querySelectorAll(".foto-galeria img");

console.log("Fotos encontradas:", fotos.length);

fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        // Eliminar visor anterior si existe
        const visorAnterior = document.querySelector(".visor-galeria");

        if (visorAnterior) {
            visorAnterior.remove();
        }

        // Crear el visor
        const visor = document.createElement("div");

        visor.className = "visor-galeria";

        visor.innerHTML = `
            <span class="cerrar-visor">&times;</span>
            <img src="${foto.src}" alt="${foto.alt}">
        `;

        // Agregar el visor a la página
        document.body.appendChild(visor);

        // Botón para cerrar
        const cerrar = visor.querySelector(".cerrar-visor");

        cerrar.addEventListener("click", function () {
            visor.remove();
        });

        // Cerrar al hacer clic fuera de la imagen
        visor.addEventListener("click", function (event) {

            if (event.target === visor) {
                visor.remove();
            }

        });

    });

});


    /* =========================
       CERRAR GALERÍA CON ESC
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const visor = document.querySelector(".visor-galeria");

            if (visor) {
                visor.remove();
            }

        }

    });


    /* =========================
       ANIMACIÓN DE SECCIONES
    ========================= */

    const secciones = document.querySelectorAll("section");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("mostrar");
                    observador.unobserve(entrada.target);
                }

            });

        }, {
            threshold: 0.10
        });


        secciones.forEach(function (seccion) {

            seccion.classList.add("oculto");
            observador.observe(seccion);

        });

    } else {

        secciones.forEach(function (seccion) {
            seccion.classList.add("mostrar");
        });

    }

});