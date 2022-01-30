// create rendering context
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d')

// TODO: Relate to canvas size
const Y_INDEX_BREAK = 400;

  
const drawPixel = (_imageData, x, y) => {
  const step = 4; //every pixel is R G B A, so we need 4 steps between each pixel
  const one_row = Y_INDEX_BREAK*step; 
  const x_index = x; 
  const y_index = y*one_row; 
  const firstIndex = x_index*step + y_index;

  _imageData.data[firstIndex +0] = 255;  // R value
  _imageData.data[firstIndex +1] = 0;    // G value
  _imageData.data[firstIndex +2] = 0;  // B value
  _imageData.data[firstIndex +3] = 255;
}
  
// TODO: replace magic numbers to get them from context
const imageData = ctx.createImageData(400, 400)

// drawPixel(imageData, 10, 10)
for(let x=0; x< 400; ++x)
{
    for(let y=0; y< 400; ++y)
    {
        drawPixel(imageData, x, y);
    }
}
ctx.putImageData(imageData, 0, 0)
