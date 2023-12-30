const canvas = document.querySelector(".canvas1");
const canvas2 = document.querySelector(".canvas2");
const canvas3 = document.querySelector(".canvas3");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");
let imageData = 0;

const img = new Image();

img.src = 'horses-desktop.jpg'
var rgbCounter = 0
var mainArray = []


img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData)
    
    for (var a=0; a <= canvas.height - 1 ; a++){
        var rowArray = []

        for (var b=0; b <= canvas.width - 1; b++){
            
            var rgbArray = []   

            for (var c=0; c <= 3; c++){
                rgbArray.push(imageData.data[rgbCounter])
                rgbCounter++
            }
            rowArray.push(rgbArray)            
            ctx2.fillStyle = `rgba(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]},${rgbArray[3]})`;
            ctx2.fillRect(b, a, 1, 1);
            ctx.fillStyle = `rgba(${rgbArray[0]},${rgbArray[2]},${rgbArray[1]},${rgbArray[3]})`;
            ctx.fillRect(b, a, 1, 1); 
        }

        mainArray.push(rowArray)
    };
    console.log(mainArray)

}





    











