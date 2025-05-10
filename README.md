# Task

Desarrolle una pequeña red en pantalla completa, que pueda ser utilizada para pintar imágenes simples. La red consiste en pequeñas celdas cuadradas. Debe haber 100 celdas horizontales. El número de filas no debe exceder los límites de la ventana. Es decir, la pantalla debe estar llena de celdas, pero no deben existir barras de desplazamiento, ya que todas las celdas caben en la ventana.

- Cuando una celda sea clickeada, la misma debe “activarse” cambiando de color. Al volver a clickear la celda, la misma debe desactivarse y removerse el color.

- Cuando una celda sea clickeada con el botón derecho del mouse, debería aparecer una ventana emergente donde usted pueda elegir un color. Se requiere un mínimo de 5 opciones de colores. El color elegido se convierte en el color por defecto para cada celda activada al dibujar.

● El selector de color aparece (fadeIn) cuando usted presione el botón derecho del mouse en la posición que se encuentre el cursor.
● El menú contextual específico del navegador no aparece al hacer clic con el botón derecho del mouse.
● El selector de color desaparece (fadeOut) cuando el cursor se desplace fuera del mismo, o cuando un color sea seleccionado.

- Para facilitar el dibujo de imágenes, debe ser posible hacerlo arrastrando el cursor del mouse. Cuando una celda sea clickeada, se activa la dicha función. Todas las celdas por las que pase el cursor deben seleccionarse. Cuando se suelta el mouse, se desactiva la función de arrastre, y todas las celdas por las que pase el cursor ya no se verán modificadas. Tener en cuenta que, de todas formas, debe continuar siendo posible clickear cada celda individualmente.

# Mini Painting Application

This is a mini painting application that features a responsive grid of 100 squares. Users can click on the squares to change their colors, creating a simple painting experience.

## Project Structure

```
mini-painting-app
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   └── style.css     # Styles for the application
│   └── scripts
│       └── app.js        # JavaScript functionality
└── README.md             # Project documentation
```

## Installation

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mini-painting-app
   ```

## Usage

1. Open `src/index.html` in your web browser.
2. Click on any of the squares in the grid to change their color.

## Features

- Responsive grid layout that adjusts to the size of the browser window.
- Clickable squares that change color on interaction.
- Menu color, eraser and random color.

## License

This project is licensed under the MIT License.
