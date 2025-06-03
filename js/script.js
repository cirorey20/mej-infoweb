// document.addEventListener('DOMContentLoaded', () => {
//     // Aquí puedes añadir tu código JavaScript para interactividad
//     // Por ejemplo, para un menú hamburguesa en móvil, un slider, etc.
// });
function abrirWhatsApp() {
        // Reemplaza 'XXXXXXXXXXX' con el número de teléfono completo, incluyendo el código de país.
        // Por ejemplo, para Argentina sería +54 9 seguido del número, sin el 15.
        // Ejemplo: para un número de Argentina como 11 5555-4444, sería https://wa.me/5491155554444
        const numeroWhatsApp = '5491123456789'; // ¡IMPORTANTE! Reemplaza con el número real
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}`;
        window.open(urlWhatsApp, '_blank');
    }
        