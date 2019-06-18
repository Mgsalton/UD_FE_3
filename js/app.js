/*******************************************************************************

This is the end point for the program. It's called when the user reaches
the upper boundary of the canvas, which is tracked in:

    > player.update

*******************************************************************************/

function endGame() {
    const modalSelector = document.querySelector('.modal');
    modalSelector.classList.toggle("displayModal");
};

/*******************************************************************************

This is the constructor for all enemy types. It provides default:
    > x coordinates
    > y coordinates
    > speed
    > sprite
    > width
    > height
For any objects that inherit from it.

It also contains the following functions:

    > update:
        Updates the enemy's position, required method for the game.
        Carries over the dt variable that is computed in engine.js.
        The dt variable is multiplied by any movement to ensure the game
        runs at the same speed for all computers.

    > render:
        Draws each enemy on screen.

*******************************************************************************/

function EnemyGeneration(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.width = 60;
    this.height = 60;

    this.update = function(dt) {
        //console.log('Enemy delta is ' + dt);
        //multiplies enemy movement with the dt variable
        //if the enemy reaches x 549 (right), it gets reset to -50 (left)
        if (this.x < 550) {
            this.x += this.speed * dt;
        } else {
            this.x = -50;
        };
    };

    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};

/*******************************************************************************

This is the constructor for the player character. It provides default:
    > x coordinates
    > y coordinates
    > name
    > boundary tracking (left, right, top, and bottom)
    > speed
    > sprite
    > width
    > height
    > end flag
For any objects that inherit from it.

Function descriptions are outlined below:

*******************************************************************************/

function PlayerGeneration(name) {
    this.x = 300;
    this.y = 400;
    this.name = name;
    this.leftBoundary = true;
    this.rightBoundary = true;
    this.topBoundary = true;
    this.bottomBoundary = true;
    this.sprite = 'images/char-boy.png';
    this.width = 60;
    this.height = 60;
    this.endFlag = 0;

/*******************************************************************************

The player update function is used to control many things in this program...

Firstly, it tracks collision with enemy objects using the code below. Credit to:

http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/#d-collision-detection

*******************************************************************************/

    this.update = function() {

        if (player.x < enemyOne.x + enemyOne.width && player.x + player.width > enemyOne.x &&
		    player.y < enemyOne.y + enemyOne.height && player.y + player.height > enemyOne.y) {
                //console.log('There was a collision with enemy 1');
                player.x = 300;
                player.y = 400;
        };

        if (player.x < enemyTwo.x + enemyTwo.width && player.x + player.width > enemyTwo.x &&
            player.y < enemyTwo.y + enemyTwo.height && player.y + player.height > enemyTwo.y) {
                //console.log('There was a collision with enemy 2');
                player.x = 300;
                player.y = 400;
        };

        if (player.x < enemyThree.x + enemyThree.width && player.x + player.width > enemyThree.x &&
            player.y < enemyThree.y + enemyThree.height && player.y + player.height > enemyThree.y) {
                //console.log('There was a collision with enemy 3');
                player.x = 300;
                player.y = 400;
        };

/*******************************************************************************

It constantly tracks whether the player has reached the borders of the canvas
using flow control, and works in conjunction with the HandleInput functions
below to suppress key input.

This works, chiefly, by using the x and y coordinates to determine where the
player is. If they reach the boundary (such as 0), a Boolean is activated that
works with HandleInput below to suppress player movement.

*******************************************************************************/

        if (this.x > 0) {
            this.leftBoundary = true;
        } else if (this.x <= 0) {
            //console.log ('hit the left boundry');
            this.leftBoundary = false;
        };

        if (this.x < 400) {
            this.rightBoundary = true;
        } else if (this.x >= 400) {
            //console.log ('hit the right boundry');
            this.rightBoundary = false;
        };

/*******************************************************************************

The top boundary is particularly important as it sets the win condition for the
game. If the player reaches this point:

    > player.endFlag is set to 1, which interfaces with engine.js
    > endGame() is called.

*******************************************************************************/

        if (this.y > 0) {
            this.topBoundary = true;
        } else if (this.y <= 0) {
            //console.log ('hit the top boundry');
            this.topBoundary = false;
            player.endFlag = 1;
            endGame();
        };

        if (this.y < 400) {
            this.bottomBoundary = true;
        } else if (this.y >= 400) {
            //console.log ('hit the bottom boundry');
            this.bottomBoundary = false;
        };

    };

/*******************************************************************************

The render function is used to set the player character sprite.

*******************************************************************************/

    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

/*******************************************************************************

The HandleInput function allows the character to move across the canvas.
It also leverages the player.endFlag condition to suppress movement if the
player has reached the top of the canvas (which stops the character from moving
when the modal is activated).

*******************************************************************************/

    this.handleInput = function(key) {

        // used to reduce the code length
        const lBoundary = player.leftBoundary;
        const tBoundary = player.topBoundary;
        const rBoundary = player.rightBoundary;
        const bBoundary = player.bottomBoundary;

        //console.log('You pressed ' + key);
        if (key == 'left' && lBoundary == true && player.endFlag != 1) {
            //console.log('Left!');
            player.x -= 100;
        } else if (key == 'up' && tBoundary == true && player.endFlag != 1) {
            //console.log('Up!');
            player.y -= 90;
        } else if (key == 'right' && rBoundary == true && player.endFlag != 1) {
            //console.log('Right!');
            player.x += 100;
        } else if (key == 'down' &&  bBoundary == true && player.endFlag != 1) {
            //console.log('Down!');
            player.y += 90;
        } else {
            //console.log('None!');
            return;
        };
    };
}; // end of constructor (phew!)

/*******************************************************************************

These player and enemy objects are created using the constructors above.
Arguments are passed in to set default values and to distinguish each object
from each other. (e.g. each enemy has a unique start location and speed)

*******************************************************************************/

let player = new PlayerGeneration('Swimmer');
let enemyOne = new EnemyGeneration(-20, 60, 290);
let enemyTwo = new EnemyGeneration(-10, 145, 500);
let enemyThree = new EnemyGeneration(0, 230, 180);

/*******************************************************************************

The allEnemies array holds the enemy objects in one place so that the code in
engine.js can loop through them sequentially

*******************************************************************************/

let allEnemies = [enemyOne, enemyTwo, enemyThree];

/*******************************************************************************

This listens for key presses and sends the keys to your
Player.handleInput() method. Unchanges from default.

*******************************************************************************/

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
