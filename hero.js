

let controller = new Controller();
let display = new Display(document.querySelector("canvas"));
let game = new Game();
let engine = new Engine(1000/30, render, update);

const update= function() {
    if (controller.left.active)  {game.world.player.moveLeft(); }
    if (controller.right.active) {game.world.player.moveRight();}
    if (controller.up.active) {game.world.player.jump(); controller.up.active = false;}
    game.update();
};


display.buffer.canvas.height = game.world.height;
display.buffer.canvas.width = game.world.width;

window.addEventListener("keydown", keyDownUp);
window.addEventListener("keyup", keyDownUp);
window.addEventListener("resize", resize);

resize();

engine.start();