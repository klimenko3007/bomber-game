// create rendering context
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d')

  
const drawPixel = (_imageData, pixelNumber) => {
  const firstNumber = (pixelNumber-1)*4
  _imageData.data[firstNumber] = 255;  // R value
  _imageData.data[firstNumber +1] = 0;    // G value
  _imageData.data[firstNumber +2] = 0;  // B value
  _imageData.data[firstNumber +3] = 255;
}
  
// TODO: replace magic numbers to get them from context
const imageData = ctx.createImageData(400, 400)

drawPixel(imageData, 10)
ctx.putImageData(imageData, 0, 0)
