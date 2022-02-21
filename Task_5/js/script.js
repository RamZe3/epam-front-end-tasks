function draw() {
    var canvas = document.getElementById('scene');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    }
    //ctx.fillStyle = 'rgb(200, 0, 0)';
        //ctx.fillRect(10, 10, 50, 50);

        //ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        //ctx.fillRect(30, 30, 50, 50);
        //var img = new Image();   // Create new img element
        //img.addEventListener('load', function() {
        // execute drawImage statements here
        //}, false);
        //img.src = '/images/hero.jpg';
        //ctx.drawImage(img, 0 , 0)
        //var imgBrick = new Image();
        //imgBrick.src = 'images/hero.jpg';
        //ctx.draw(imgBrick)
    //ctx.drawImage(imgBrick);
    var mass = new Array(10);
    for (var i = 0; i < 10; i++){
      mass[i] = new Array(10)
    }
    drawGround(ctx, 0)
    //for (var i = 1; i < 5; i++){
      //ctx.fillRect(10*i, 10*i, 50, 50);
    //}
  }

function drawGround(ctx, mass){
  let width = 80 //px
  let height = 80 //px
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  for (var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
      //var obj = mass[i][j]
      ctx.fillRect(width*i, height*j, 80, 80)
    }
  }
}