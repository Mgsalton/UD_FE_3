// Enemies our player must avoid
var Enemy = function() {
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

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// best practice is to use uppercase for constructors

// passing a name into the function will update it appropriately
// e.g. const mathew = new PlayerClass('Mathew')

function PlayerClass(name) {
    this.name = name;

    this.update = function(){

    };
    this.render = function(){

    };
    this.handleInput = function(){

    };
};

// using a constructor allows us to create multiple instances

//let player2 = new PlayerClass();
//let player3 = new PlayerClass();

/*
Using literal notation

let player = {
    update: function(){

    },
    render: function(){

    },
    handleInput: function(){

    }
};
*/
>>>>>>> Stashed changes

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// the 'new' operator creates a new object instance

let player = new PlayerClass();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
