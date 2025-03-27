const morseDictionary = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/', '.': '.-.-.-',
    ',': '--..--', '?': '..--..', '!': '-.-.--'
};

const reverseMorseDictionary = Object.fromEntries(
    Object.entries(morseDictionary).map(([key, value]) => [value, key])
);

const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

inputText.addEventListener('input', () => {
    const input = inputText.value.toUpperCase();
    const result = input.split('').map(char => morseDictionary[char] || '').join(' ');
    outputText.value = result;
});

outputText.addEventListener('input', () => {
    const input = outputText.value.trim();
    const result = input.split(' ').map(morse => reverseMorseDictionary[morse] || '').join('');
    inputText.value = result;
});

// Lógica para limpiar los campos de texto
document.getElementById('clear-button').addEventListener('click', () => {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
});

// Eventos para copiar contenido
function copyToClipboard(elementId) {
    const textarea = document.getElementById(elementId);
    const textToCopy = textarea.value.trim();

    if (!textToCopy) {
        showNotification('No hay nada que copiar', true); // Notificación en rojo para texto vacío
        return;
    }

    textarea.select();
    textarea.setSelectionRange(0, 99999); // Compatibilidad con móviles

    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification('Texto copiado al portapapeles'); // Notificación en verde para éxito
    });
}

// Eventos para los botones de copiar
document.getElementById('copy-input').addEventListener('click', () => {
    copyToClipboard('input-text');
});

document.getElementById('copy-output').addEventListener('click', () => {
    copyToClipboard('output-text');
});

// Lógica para limpiar los campos de texto
document.getElementById('clear-button').addEventListener('click', () => {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
});


// Mostrar notificación personalizada con icono
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');

    // Inserta el ícono y el mensaje
    notification.innerHTML = `<i class="fa-solid fa-bell"></i> ${message}`;

    // Cambia el color según el tipo de notificación
    if (isError) {
        notification.classList.remove('success');
        notification.classList.add('error'); // Agrega clase para notificación de error
    } else {
        notification.classList.remove('error');
        notification.classList.add('success'); // Agrega clase para notificación de éxito
    }

    // Muestra la notificación
    notification.classList.add('show');

    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}