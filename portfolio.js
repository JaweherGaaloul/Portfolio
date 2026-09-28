window.addEventListener("load", function () {

    console.log("Bienvenue sur le portfolio de Jaweher !");

});

const sections = document.querySelectorAll("main h2");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


sections.forEach(function(section) {

    observer.observe(section);

});

const form = document.getElementById("contact");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;

    if (nom === "" || mail === "" || message === "") {

        alert("Veuillez remplir tous les champs.");

    } else {

        alert("Merci " + nom + " ! Votre message a bien été envoyé.");

        form.reset();

    }

});