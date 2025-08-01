document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', function() {
        const soundId = this.getAttribute('data-sound').replace('.mp3', '');
        const audio = document.getElementById(soundId);
        audio.currentTime = 0; // Reinicia el audio si ya estaba reproduciéndose
        audio.play();
    });
});






document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', function() {
        // 1. Reproducir el sonido
        const soundId = this.getAttribute('data-sound').replace('.mp3', '');
        const audio = document.getElementById(soundId);
        audio.currentTime = 0; // Reinicia el audio si ya se estaba reproduciendo
        audio.play().catch(e => console.log("Error al reproducir:", e));

        // 2. Mostrar la caja de texto asociada a la imagen
        const photoContainer = this.closest('.photo-container');
        const caption = photoContainer.querySelector('.caption');
        
        // Oculta todas las cajas de texto primero (por si hay varias abiertas)
        document.querySelectorAll('.caption').forEach(c => c.classList.add('hidden'));
        
        // Muestra la caja de texto de la imagen clickeada
        caption.classList.remove('hidden');
        
        // Opcional: Oculta la caja después de 3 segundos
        setTimeout(() => {
            caption.classList.add('hidden');
        }, 3000);
    });
});







// Crear Pompompurins que caen
function createPompomRain() {
    const rainContainer = document.getElementById('pompomRain');
    const numPompoms = 20; // Número de Pompompurins

    for (let i = 0; i < numPompoms; i++) {
        setTimeout(() => {
            const pompom = document.createElement('div');
            pompom.className = 'pompom-drop';
            
            // Posición horizontal aleatoria
            const leftPos = Math.random() * 100;
            pompom.style.left = `${leftPos}vw`;
            
            // Velocidad y tamaño aleatorios
            const duration = 5 + Math.random() * 10; // Entre 5 y 15 segundos
            const size = 20 + Math.random() * 30; // Entre 20px y 50px
            pompom.style.width = `${size}px`;
            pompom.style.height = `${size}px`;
            pompom.style.animationDuration = `${duration}s`;
            
            // Opacidad aleatoria para variedad
            pompom.style.opacity = 0.7 + Math.random() * 0.3;
            
            rainContainer.appendChild(pompom);
            
            // Eliminar después de caer para optimizar
            setTimeout(() => pompom.remove(), duration * 1000);
        }, i * 300); // Retraso entre cada Pompom
    }
}

// Iniciar la lluvia al cargar la página y cada 20 segundos
window.onload = createPompomRain;
setInterval(createPompomRain, 20000);




document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('pompom-cursor');
    cursor.style.left = `${e.clientX + 10}px`; // Ajusta la posición X (+10px para desplazamiento)
    cursor.style.top = `${e.clientY + 10}px`; // Ajusta la posición Y
});


document.getElementById('pompom-button').addEventListener('click', function() {
    window.location.href = "https://web-flores.netlify.app/";
});





