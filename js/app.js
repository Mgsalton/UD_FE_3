// Enemies our player must avoid
/*var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
*/

function EnemyGeneration(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';

    this.update = function(dt) {

    };

    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function PlayerGeneration(name) {
    this.x = 300;
    this.y = 400;
    this.name = name;
    this.sprite = 'images/char-boy.png';

    this.update = function(){

    };

    this.render = function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    this.handleInput = function(key){
        // https://youtu.be/OFzs4unxVtU?t=312
        console.log('You pressed ' + key);
        if (key == 'left') {
            //console.log('Left!');
            player.x -= 100;
        } else if (key == 'up') {
            //console.log('Up!');
            player.y -= 90;
        } else if (key == 'right') {
            //console.log('Right!');
            player.x += 100;
        } else if (key == 'down') {
            //console.log('Down!');
            player.y += 90;
        } else {
            console.log('None!');
            return;
        }
    };
};

let player = new PlayerGeneration('Mathew');
let enemyOne = new EnemyGeneration(0, 60);
let enemyTwo = new EnemyGeneration(0, 145);
let enemyThree = new EnemyGeneration(0, 230);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [enemyOne, enemyTwo, enemyThree];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    //console.log(e);
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
