function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

const Type = { BLOCK: 'Block', ENEMY: 'Enemy', HERO: 'Hero' , BONUS: 'Bonus'};

class Point{
    constructor(x, y){
        this.x = x
        this.y = y
    }
}

class GameObj extends Point{
    constructor(x, y, type){
        super(x, y)
        this.type = type
        this.lastPoint = new Point(x, y)
    }

    move(x, y) {
        this.lastPoint = new Point(this.x, this.y)
        this.x += x
        this.y += y
    }
}

class GameLogic{
    constructor(health, enemyDamage, blockDamage, bonusCount){
        this.health = health
        this.enemyDamage = enemyDamage
        this.blockDamage = blockDamage
        this.bonusCount = bonusCount
    }

    checkGround(obj){
        if(obj.x > 9){
            obj.x = 9
            this.health -= this.blockDamage
        }
        if(obj.x < 0){
            obj.x = 0
            this.health -= this.blockDamage
        }
        if(obj.y > 9){
            obj.y = 9
            this.health -= this.blockDamage
        }
        if(obj.y < 0){
            obj.y = 0
            this.health -= this.blockDamage
        }
    }

    check(hero, gameobj, mass){
        if(gameobj.type == Type.ENEMY){
            this.health -= this.enemyDamage
            hero.x = hero.lastPoint.x
            hero.y = hero.lastPoint.y
        }
        else if(gameobj.type == Type.BLOCK){
            this.health -= this.blockDamage
            hero.x = hero.lastPoint.x
            hero.y = hero.lastPoint.y
        }
        else if(gameobj.type == Type.BONUS){
            this.addBonus(mass)
            this.bonusCount--
            gameobj = null
        }
    }

    checkGame(){
        if(this.health <= 0){
            alert("Вы проиграли(")
        }
        if(this.bonusCount == 0){
            alert("Вы выйграли)")
        }
    }

    moveEnemy(mass, enemy){
        enemy.lastPoint.x = enemy.x
        enemy.lastPoint.y = enemy.y
        enemy.x += getRandomInt(-1, 2)
        enemy.y += getRandomInt(-1, 2)

        if(enemy.x > 9){
            enemy.x = 9
        }
        if(enemy.x < 0){
            enemy.x = 0
        }
        if(enemy.y > 9){
            enemy.y = 9
        }
        if(enemy.y < 0){
            enemy.y = 0
        }

        if(mass[enemy.x][enemy.y] == null){
            mass[enemy.lastPoint.x][enemy.lastPoint.y] = null
            mass[enemy.x][enemy.y] = enemy
        }
        else{
            enemy.x = enemy.lastPoint.x
            enemy.y = enemy.lastPoint.y
        }
    }

    addBonus(mass){
        var bonus = new GameObj(getRandomInt(0, 10), getRandomInt(0, 10), Type.BONUS) 
        while(mass[bonus.x][bonus.y] != null){
            bonus = new GameObj(getRandomInt(0, 10), getRandomInt(0, 10), Type.BONUS) 
        }
        mass[bonus.x][bonus.y] = bonus
    }
}