// Внутренние переменные
var canvas, context; // canvas и связь объектов
var imgBrick, imgSteel, imgWater, imgForest, imgTank; // изображения
var aMap; // массив карты
var oTank; // танчик

var iCellSize = 24;
var iXCnt = 26; // количество клеток X
var iYCnt = 26; // количество клеток Y

// Функции :
function Tank(x, y, w, h, image) {
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.i = 0;
this.image = image;
}

// functions
function clear() { // очищаем canvas
context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawScene() { // основная функция DrawScene
clear(); //

// Заполняем фон
context.fillStyle = '#111';
context.fillRect(0, 0, canvas.width, canvas.height);

// Сохраняем текущий контент
context.save();

// Проход по массиву
for (var y = 0; y < iYCnt; y++) {
for (var x = 0; x < iXCnt; x++) {
switch (aMap[y][x]) {
case 0: // пропуск
break;
case 1: // Русием кирпичный блок
context.drawImage(imgBrick, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
break;
case 2: // Рисуем стальной блок
context.drawImage(imgSteel, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
break;
case 3: // Рисуем лес
context.drawImage(imgForest, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
break;
case 4: // Рисуем воду
context.drawImage(imgWater, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
break;
}
}
}

// Восстанавливаем текущий контекст
context.restore();

// Рисуем танк
context.drawImage(oTank.image, oTank.i*oTank.w, 0, oTank.w, oTank.h, oTank.x, oTank.y, oTank.w, oTank.h);
}
// -------------------------------------------------------------

// Инициализация
$(function(){
canvas = document.getElementById('scene');
canvas.width = iXCnt * iCellSize;
canvas.height = iYCnt * iCellSize;
context = canvas.getContext('2d');

// Создаем массив карты
aMap = ([
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
[0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
[0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
[0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[3, 3, 3, 3, 1, 1, 0, 0, 4, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
[3, 3, 3, 3, 1, 1, 0, 0, 4, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
[3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
[3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
[0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 2, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
[2, 2, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
[0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
[0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
[0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0]
]);

// Загрузка картинок
imgBrick = new Image();
imgBrick.src = 'images/brick.png';
imgSteel = new Image();
imgSteel.src = 'images/steel.png';
imgWater = new Image();
imgWater.src = 'images/water.png';
imgForest = new Image();
imgForest.src = 'images/forest.png';

imgTank = new Image();
imgTank.src = 'images/tank.png';
oTank = new Tank(iCellSize*9, iCellSize*24, 48, 48, imgTank);

$(window).keydown(function(event){
switch (event.keyCode) {
case 38: // Up ключ
oTank.i = 2;

// Проверка столкновения
var iCurCelX = (2 * oTank.x) / 48;
var iCurCelY = (2 * oTank.y) / 48;
if (iCurCelY) {
var iTest1 = aMap[iCurCelY-1][iCurCelX];
var iTest2 = aMap[iCurCelY-1][iCurCelX+1];

if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
oTank.y-=24;
if (oTank.y < 0) {
oTank.y = 0;
}
}
}
break;
case 40: // Вниз
oTank.i = 3;

// Проверка столкновения
var iCurCelX = (2 * oTank.x) / 48;
var iCurCelY = (2 * oTank.y) / 48;
if (iCurCelY+2 < iYCnt) {
var iTest1 = aMap[iCurCelY+2][iCurCelX];
var iTest2 = aMap[iCurCelY+2][iCurCelX+1];

if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
oTank.y+=24;
if (oTank.y > 576) { //iCellSize * (iYCnt-2)
oTank.y = 576;
}
}
}
break;
case 37: // Влево
oTank.i = 1;

// Проверка столкновения
var iCurCelX = (2 * oTank.x) / 48;
var iCurCelY = (2 * oTank.y) / 48;
var iTest1 = aMap[iCurCelY][iCurCelX-1];
var iTest2 = aMap[iCurCelY+1][iCurCelX-1];

if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
oTank.x-=24;
if (oTank.x < 0) {
oTank.x = 0;
}
}
break;
case 39: // Вправо
oTank.i = 0;

// Проверка столкновения
var iCurCelX = (2 * oTank.x) / 48;
var iCurCelY = (2 * oTank.y) / 48;
var iTest1 = aMap[iCurCelY][iCurCelX+2];
var iTest2 = aMap[iCurCelY+1][iCurCelX+2];

if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
oTank.x+=24;
if (oTank.x > 576) { //iCellSize * (iXCnt-2)
oTank.x = 576;
}
}
break;
}
});

setInterval(drawScene, 40); // loop drawScene
});