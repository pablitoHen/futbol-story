document.addEventListener("DOMContentLoaded", function () {

    const splash = document.getElementById("splash");

    // Verifica se a Splash já apareceu nesta abertura do site
    if (sessionStorage.getItem("splashJaMostrada")) {

        // Se já apareceu, esconde imediatamente
        splash.style.display = "none";

        return;
    }

    // Marca que a Splash já foi mostrada
    sessionStorage.setItem("splashJaMostrada", "true");

    // Depois de 2,5 segundos, começa a desaparecer
    setTimeout(function () {

        splash.classList.add("sumir");

    }, 2500);

});