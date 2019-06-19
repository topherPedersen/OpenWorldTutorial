// Epic Open World Tutorial Starter Template: https://repl.it/@topherPedersen/OpenWorldTutorialStarterTemplate

var game = new Phaser.Game(window.outerWidth, window.outerHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('map', 'assets/EpicTilemap.csv', null, Phaser.Tilemap.CSV);
    game.load.image('tiles', 'assets/EpicTileset.png');

}

var map;
var layer;
var cursors;

function create() {

    //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
    map = game.add.tilemap('map', 1500, 1000); // Tile Dimensions 1500px by 1000px

    //  Now add in the tileset
    map.addTilesetImage('tiles');
    
    //  Create our layer
    layer = map.createLayer(0);

    //  Resize the world
    layer.resizeWorld();

    //  Allow cursors to scroll around the map
    cursors = game.input.keyboard.createCursorKeys();

    var help = game.add.text(16, 16, 'Arrows to scroll', { font: '14px Arial', fill: '#ffffff' });
    help.fixedToCamera = true;

    // Position Camera Approximately in Center of World
    game.camera.x = 7500;
    game.camera.y = 7500;

}

function update() {

    if (cursors.left.isDown) {
        game.camera.x -= 6;
    } else if (cursors.right.isDown) {
        game.camera.x += 6;
    }

    if (cursors.up.isDown) {
        game.camera.y -= 6;
    } else if (cursors.down.isDown) {
        game.camera.y += 6;
    }

}

function render() {
    // empty
}