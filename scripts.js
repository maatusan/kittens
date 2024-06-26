document.getElementById('changeTextButton').addEventListener('click', function() {
    const mainParagraph = document.getElementById('mainParagraph');
    mainParagraph.textContent = 'The text has been changed!';
});

document.getElementById('changeColorButton').addEventListener('click', function() {
    const colors = ['#FFD700', '#ADFF2F', '#FF69B4', '#87CEEB', '#FFA07A'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

document.getElementById('toggleImageButton').addEventListener('click', function() {
    const image = document.getElementById('toggleImage');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0f0f0';
    const mainParagraph = document.getElementById('mainParagraph');
    mainParagraph.textContent = 'This web page demonstrates basic HTML, CSS, and JavaScript interactions.';
    const image = document.getElementById('toggleImage');
    image.style.display = 'none';
});

