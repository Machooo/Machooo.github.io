document.getElementById('anchor').addEventListener('click', function (e) {
    document.querySelector("#icons").scrollIntoView({
        behavior: 'smooth' // не работает в сафари, лучший браузер всё таки :(
    });
});