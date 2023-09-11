const codigos = document.getElementById('codigos');

window.addEventListener('keydown',(event) => {
    codigos.innerHTML = ` 
    <div class='key'>
    ${event.key === ' ' ? 'Space': event.key }
    <small>Tecla</small>
    </div>
    <div class='key'>
        ${event.code}
        <small>Key</small>
    </div>
    <div class='key'>
        ${event.code}
        <small>Código</small>
    </div> `
})