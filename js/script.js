
document.addEventListener('DOMContentLoaded', () => {
    const btnReestablecer = document.getElementById('btnReestablecer');
    const contadorVisitas = document.getElementById('contadorVisitas');

    let visitCounter = parseFloat(localStorage.getItem('visitCounter')) || 0;

    visitCounter++;
    localStorage.setItem('visitCounter', visitCounter);

    contadorVisitas.textContent = visitCounter;

    btnReestablecer.addEventListener('click', () => {
        localStorage.setItem('visitCounter', '0');
        contadorVisitas.textContent = 0;
    });
});


