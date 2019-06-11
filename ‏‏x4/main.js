class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}
const player1 = new Player('uri');
function play3time(obj) {
    for (let i = 0; i < 3; i++) {
        var rnd = Math.floor(Math.random() * 10) + 1;
        if (rnd % 2 === 0) {
            obj.score++;
        }
    }
    console.log('score:', obj.score);
}
play3time(player1);
