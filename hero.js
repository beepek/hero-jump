

var controller = new Controller();

var display = new Display(document.querySelector("canvas"));

var game = new Game();

var engine = new Engine(1000/30, render, update);
