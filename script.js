
//---------------Variable Init------------------//


const canvas = document.querySelector(".canvas");
const fileInput = document.querySelector("input")
const slider = document.querySelector('#slider')
const label = document.querySelector('output')
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
let imageData = 0;
var rgbCounter = 0
var mainArray = []
var rgbArray = []   


//---------------Event Listeners------------------//


slider.addEventListener('input', ()=>{
    label.innerText = `Brightness: ${slider.value}`
    
    for (var e=0; e <= mainArray.length-1; e++ ){

        for (var f=0; f <= mainArray[0].length-1; f++){

            let originalRed = mainArray[e][f][0];
            let originalGreen = mainArray[e][f][1];
            let originalBlue = mainArray[e][f][2];
            let originalAlpha = mainArray[e][f][3];

            // Apply brightness adjustment to each RGB component
            let adjustedRed = parseInt(originalRed) + parseInt(slider.value);
            let adjustedGreen = parseInt(originalGreen) + parseInt(slider.value);
            let adjustedBlue = parseInt(originalBlue) + parseInt(slider.value);

            // Ensure that the adjusted values are within the valid range (0 to 255)
            adjustedRed = Math.min(255, Math.max(0, adjustedRed));
            adjustedGreen = Math.min(255, Math.max(0, adjustedGreen));
            adjustedBlue = Math.min(255, Math.max(0, adjustedBlue));

            // Set the adjusted color as the fillStyle
            ctx.fillStyle = `rgba(${adjustedRed},${adjustedGreen},${adjustedBlue},${originalAlpha})`;
            ctx.fillRect(f, e, 1, 1);
            ctx.fillStyle = `rgba(${mainArray[e][f][0]+slider},${mainArray[e][f][1]},${mainArray[e][f][2]},${mainArray[e][f][3]})`;
            ctx.fillRect(f, e, 1, 1);  

        }
    }


})

fileInput.addEventListener('change', imageHandler);
const img = new Image();


 
//---------------Functions------------------//


img.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log('hello')
    
    for (var a=0; a <= canvas.height - 1 ; a++){
        var rowArray = []

        for (var b=0; b <= canvas.width - 1; b++){
            
            rgbArray = []   

            for (var c=0; c <= 3; c++){
                rgbArray.push(imageData.data[rgbCounter])
                rgbCounter++
            }
            rowArray.push(rgbArray)            
            ctx.fillStyle = `rgba(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]},${rgbArray[3]})`;
            ctx.fillRect(b, a, 1, 1); 
        }

        mainArray.push(rowArray)
    };

}




function imageHandler(){

    var selectedFile = fileInput.files[0];
    // console.log('hello')
    var reader = new FileReader()


    reader.onload = function (e) {
        var imageBase64 = e.target.result;
        // console.log(imageData)
        var imgElement = document.createElement('img');
        imgElement.src = imageBase64;
        img.src = imageBase64
        document.body.appendChild(imgElement);
    }

    reader.readAsDataURL(selectedFile)
}











