// create rendering context
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d')

// TODO: Relate to canvas size
const Y_INDEX_BREAK = 400;

class Color {
  constructor(r, g, b, a = 255) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a;
  }
  get r () { return this._r}
  get g () { return this._g}
  get b () { return this._b}
  get a () { return this._a}
}


const drawPixel = (_imageData, x, y, color) => {
  const step = 4; //every pixel is R G B A, so we need 4 steps between each pixel
  const one_row = Y_INDEX_BREAK*step; 
  const x_index = x; 
  const y_index = y*one_row; 
  const firstIndex = x_index*step + y_index;

  _imageData.data[firstIndex +0] = color.r;  
  _imageData.data[firstIndex +1] = color.g;   
  _imageData.data[firstIndex +2] = color.b; 
  _imageData.data[firstIndex +3] = color.a;
}
  
// TODO: replace magic numbers to get them from context
const imageData = ctx.createImageData(400, 400)

// drawPixel(imageData, 10, 10) 
for(let x=0; x< 400; ++x)
{
    for(let y=0; y< 400; ++y)
    {
        drawPixel(imageData, x, y, {r: 0, g: 0, b: 255, a: 255 });
    }
}
ctx.putImageData(imageData, 0, 0)
