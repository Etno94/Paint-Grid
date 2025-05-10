$(document).ready(function () {
    const $gridContainer = $('#grid-container');
    const totalColumns = 100; // Fixed number of columns
    const cellSize = window.innerWidth / totalColumns; // Calculate cell size based on viewport width
    const totalRows = Math.floor(window.innerHeight / cellSize); // Calculate rows to fit within 100vh
    const colors = [
        'rgb(255, 0, 0)', // red
        'rgb(0, 0, 255)', // blue
        'rgb(0, 255, 0)',  // green
        'rgb(255, 255, 0)', // yellow
        'rgb(255, 0, 255)', // magenta
        'rgb(0, 255, 255)', // cyan
        'rgb(0, 0, 0)', // black
        'random', 
        'eraser'];
    
    $gridContainer.data('selectedColor', 'random');
    
    let isMouseDown = false;

    const $colorPicker = $('<div>')
        .attr('id', 'color-picker')
        .css({
            position: 'absolute',
            display: 'none',
            background: '#fff',
            border: '1px solid #ddd',
            padding: '10px',
            'z-index': 1000
        })
        .appendTo('body');

    colors.forEach(color => {
        const $colorOption = $('<div>')
            .addClass('color-option')
            .css({
                width: '20px',
                height: '20px',
                margin: '5px',
                display: color === 'eraser' ? 'block' : 'inline-block',
                cursor: 'pointer',
                background: color === 'eraser' ? 'transparent' : 
                            color === 'random' ? 'linear-gradient(45deg, red, green, blue)' : 
                            color,
                border: color === 'eraser' ? '1px solid #000' : 'none'
            });
    
        if (color === 'eraser') {
            const $eraserIcon = $('<i>')
                .addClass('fas fa-eraser')
                .css({
                    fontSize: '16px',
                    color: '#000',
                    display: 'block',
                    textAlign: 'center',
                    lineHeight: '20px'
                });
            $colorOption.append($eraserIcon);
        }
    
        $colorOption.on('click', function () {
            const selectedColor = color === 'eraser' ? 'eraser' :
                                  color === 'random' ? 'random' : 
                                  $(this).css('background-color');
            $colorPicker.fadeOut();
            $gridContainer.data('selectedColor', selectedColor);
        });
    
        $colorPicker.append($colorOption);
    });

    $colorPicker.on('mouseleave', function () {
        $colorPicker.fadeOut();
    });

    $(document).on('mouseup touchend', function () {
        isMouseDown = false;
    });

    $gridContainer.on('dragstart', function (e) {
        e.preventDefault();
    });

    $gridContainer
        .css({
        'grid-template-columns': `repeat(${totalColumns}, 1fr)`,
        'grid-template-rows': `repeat(${totalRows}, 1fr)`
        }).
        on('contextmenu', function (e) {
            e.preventDefault();
            $colorPicker.css({
                top: e.pageY - 5 + 'px',
                left: e.pageX - 5 + 'px'
            }).fadeIn();
        });

    // Create grid cells
    for (let i = 0; i < totalColumns * totalRows; i++) {
        const $square = $('<id="'+(i+1)+'" div>')
            .addClass('grid-square')
            .on('mousedown', function (e) {
                e.preventDefault();
                if (e.which !== 1) return;
                isMouseDown = true;

                const cellColor = $(this).css('background-color');
                const selectedColor = $gridContainer.data('selectedColor');
                if (selectedColor === 'eraser' || selectedColor === cellColor) {
                    $(this).css('background-color', 'rgb(255, 255, 255)');
                } else if(selectedColor === 'random') {
                    $(this).css('background-color', getRandomColor());
                } else {
                    $(this).css('background-color', selectedColor);
                }
            })
            .on('mouseover', function () {
                if (isMouseDown) {
                    const selectedColor = $gridContainer.data('selectedColor');
                    if (selectedColor === 'eraser') {
                        $(this).css('background-color', 'rgb(255, 255, 255)');
                    } else if(selectedColor === 'random') {
                        $(this).css('background-color', getRandomColor());
                    } else {
                        $(this).css('background-color', selectedColor);
                    }
                }
            });
        $gridContainer.append($square);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

