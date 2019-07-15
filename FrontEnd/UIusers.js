require('./styles/app.css');

/**
 * Metodo para renderizar un msj.
 */
function renderMessage(message, colorMessage, secondsToRemove) {
    const div = document.createElement('div');
    div.className = `alert alert-${colorMessage} message`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.col-md-4');
    const recipeForm = document.querySelector('#recipe-form');

    container.insertBefore(div, recipeForm); // Coloca el msj entre el form y el col-md-4.
    setTimeout(() => {
        document.querySelector('.message').remove(); // Todos los elementos que tengan clase "message" seran removidos.
    }, secondsToRemove);
}

document.getElementById('signupbtn').addEventListener('click', e => {

});