var canvas;
var stage;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}
function gameLoop() {
    stage.update();
}
function main() {
    var helloText = new createjs.Text("Hello World", "40px consolas", "#000000");
    stage.addChild(helloText);
}
//# sourceMappingURL=game.js.map