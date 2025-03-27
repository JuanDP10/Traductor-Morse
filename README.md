# 📡 Traductor Morse

Este proyecto es una aplicación web que permite traducir texto entre el idioma español y código Morse. Diseñado para ser intuitivo y fácil de usar, el traductor también incluye características adicionales como copiar y limpiar texto rápidamente.

## ✨ Características

- 🔤 Traducción de texto en español a código Morse y viceversa.
- 📋 Botones para copiar texto traducido al portapapeles.
- 🗑️ Función de limpieza rápida para ambos campos de texto.
- 🔔 Notificaciones visuales para acciones exitosas o errores.
- 🖥️ Interfaz moderna y responsiva basada en Bootstrap.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura principal de la aplicación.
- **CSS3**: Estilización con Bootstrap y clases personalizadas.
- **JavaScript (ES6)**: Lógica para la traducción, manejo de eventos y notificaciones.
- **Font Awesome**: Iconos para mejorar la experiencia visual.

## 📂 Estructura del Proyecto

```plaintext
project/
├── index.html       # Estructura de la interfaz de usuario
├── styles.css       # Estilos personalizados
├── script.js        # Lógica de traducción y eventos
├── image.png        # Favicon de la aplicación
```

## 🚀 Instrucciones de Uso

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/JuanDP10/Traductor-Morse.git
   ```
2. Abre el archivo `index.html` en tu navegador favorito.
3. Escribe el texto en español o en código Morse en el campo correspondiente.
4. Observa la traducción automática en tiempo real en el otro campo de texto.
5. Usa los botones:
   - **Copiar**: Para copiar el texto al portapapeles.
   - **Limpiar**: Para reiniciar ambos campos de texto.
6. Disfruta de una experiencia fluida y funcional.

## 🔧 Funcionalidades Clave en `script.js`

- **Diccionario Morse**: 
  Se utilizan dos objetos JavaScript (`morseDictionary` y `reverseMorseDictionary`) para mapear letras y caracteres especiales a su representación en Morse y viceversa.

- **Eventos de Entrada**: 
  Traducción en tiempo real a medida que el usuario escribe.

- **Funciones de Copiar**:
  ```javascript
  function copyToClipboard(elementId) {
      const textarea = document.getElementById(elementId);
      navigator.clipboard.writeText(textarea.value.trim()).then(() => {
          showNotification('Texto copiado al portapapeles');
      });
  }
  ```

- **Notificaciones**:
  Muestra alertas visuales con colores diferenciados para errores o acciones exitosas.

## 📜 Ejemplo de Uso

### Texto en Español a Morse
- **Entrada**: `Hola Mundo`
- **Salida**: `.... --- .-.. .- / -- ..- -. -.. ---`

### Morse a Texto en Español
- **Entrada**: `.... --- .-.. .- / -- ..- -. -.. ---`
- **Salida**: `HOLA MUNDO`

## 📸 Capturas de pantalla
![image](https://github.com/user-attachments/assets/cdc2fd3c-b0e1-449f-ba95-329fe8c8b4c2)


## 📜 Licencia

Este proyecto está protegido por derechos de autor y no puede ser utilizado, modificado ni distribuido sin el permiso explícito del autor.

