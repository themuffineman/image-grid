const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let imageData = 0;

const img = new Image();

img.src = 'horses-desktop.jpg'

img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData)
};
console.log(img)








