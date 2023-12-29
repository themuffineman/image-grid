const canvas = document.querySelector("canvas");
console.log(canvas)
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.fillRect(50, 50, 1, 2);

const imageData = ctx.getImageData(50, 50, 3, 2);
console.log(imageData)
const myImageData = ctx.createImageData(100, 50);
console.log(myImageData)
