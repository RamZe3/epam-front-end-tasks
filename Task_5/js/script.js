// Создаем объект изображения
//var img = new Image();

// Привязываем функцию к событию onload
// Это указывает браузеру, что делать, когда изображение загружено
//img.onload = function() {
//	context.drawImage(img, 10, 10);
//};

// Загружаем файл изображения
//img.src = "face.jpg";

var gameLogic = new GameLogic(100, 20, 10, 5)
var mass = new Array(10);
    for (var i = 0; i < 10; i++){
      mass[i] = new Array(10)
    }

var hero = new GameObj(2, 2, Type.HERO)
var enemy = new GameObj(4, 4, Type.ENEMY)
var block = new GameObj(6, 6, Type.BLOCK)
var bonus = new GameObj(8, 8, Type.BONUS)

mass[2][2] = hero
mass[4][4] = enemy
mass[6][6] = block
mass[8][8] = bonus

function draw() {
    var canvas = document.getElementById('scene');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    }
    drawGround(ctx, mass)

    document.addEventListener('keydown', function(event){
      clear()
      var obj = new Point(1, 2)
      switch(event.code){
        case 'KeyW':
          console.log('W vveli');
          hero.move(0, -1)
          break;
        case 'KeyS':
          console.log('S vveli');
          hero.move(0, 1)
          break
        case 'KeyA':
          console.log('A vveli');
          hero.move(-1, 0)
          break
        case 'KeyD':
          console.log('D vveli');
          hero.move(1, 0)
          break
      }

      gameLogic.checkGround(hero)

      //gameLogic.addBonus(mass)

      if(mass[hero.x][hero.y]!=null){
        gameLogic.check(hero, mass[hero.x][hero.y], mass)
        mass[hero.lastPoint.x][hero.lastPoint.y] = null
        mass[hero.x][hero.y] = hero
      }
      else{
        mass[hero.lastPoint.x][hero.lastPoint.y] = null
        mass[hero.x][hero.y] = hero
      }
      gameLogic.checkGame()
      gameLogic.moveEnemy(mass, enemy)
      //gameLogic.checkGround(enemy)
      clear()
      drawGround(ctx, mass)
    });
  }

function drawGround(ctx, mass){
  let width = 80 //px
  let height = 80 //px
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  for (var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
      var obj = mass[i][j]
      if(obj != null){
        switch (obj.type){
          case Type.HERO:
            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.fillRect(width*i, height*j, 80, 80)
            break
          case Type.ENEMY:
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(width*i, height*j, 80, 80)
            break
          case Type.BLOCK:
            ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
            ctx.fillRect(width*i, height*j, 80, 80)
            break
          case Type.BONUS:
            ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
            ctx.fillRect(width*i, height*j, 80, 80)
            break
        }
      }
      else{
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(width*i, height*j, 80, 80)
      }
    }
  }
  const elem = document.querySelector('#info');
  elem.innerHTML  = '<strong>Health:</strong> ' + gameLogic.health + '<br>' + '<strong>Bonus count:</strong> ' + gameLogic.bonusCount;
  
}

function clear() { // очищаем canvas
  var canvas = document.getElementById('scene');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }