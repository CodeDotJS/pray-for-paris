var reader = new FileReader();
var img = document.createElement('img');
var inp = document.getElementById('inp');

var loadFile = function (event) {
  var file = event.target.files[0];
  inp.style.display = 'none';
  showImage(file);
};

var showImage = function (file) {  
  img.src = URL.createObjectURL(file);
  document.body.appendChild(img); 
  document.body.style['background-image'] = 'none';
};

var color = [
  '#FF0000',
  '#FFFFFF',
  '#0000FF'
];

var createRainbow = function () {
  var can = document.createElement('canvas'),
      ctx = can.getContext('2d'),
      w = img.width,
      h = img.height,
      l = Math.ceil(h/3),
      i;
  can.width = w;
  can.height = h;
  for (i = 0; i < 3; i++) {
    ctx.fillStyle = color[i];
    ctx.fillRect(0, i * l, w, l);
  }
  document.body.appendChild(can);
};

img.addEventListener('load', createRainbow);
inp.addEventListener('change', loadFile);