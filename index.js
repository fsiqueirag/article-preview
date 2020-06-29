let share = document.querySelector(".share");
let social = document.querySelector('.popup');
let estado = 0;
share.addEventListener('click', popup);

function popup() {
    if (estado === 0) {
        social.style.opacity = "1";
        estado = 1;
    } else {
        social.style.opacity = "0";
        estado = 0;
    }

}