


function getRandomColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}


function changeBackgroundColor(){
    var randomColor=getRandomColor();
    document.body.style.backgroundColor=randomColor;
    document.querySelector('span').textContent=randomColor;
}