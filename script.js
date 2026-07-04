const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
    x: 50,
    y: 130,
    w: 20,
    h: 20,
    color: "lime"
};

let obstacle = {
    x: 500,
    y: 130,
    w: 20,
    h: 20,
    color: "red",
    speed: 4
};

let score = 0;

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp") player.y -= 20;
    if (e.code === "ArrowDown") player.y += 20;
});

function drawRect(obj) {
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    obstacle.x -= obstacle.speed;

    if (obstacle.x < -20) {
        obstacle.x = 500;
        obstacle.y = Math.random() * 260;
        score++;
        document.getElementById("score").textContent = score;
    }

    if (
        player.x < obstacle.x + obstacle.w &&
        player.x + player.w > obstacle.x &&
        player.y < obstacle.y + obstacle.h &&
        player.y + player.h > obstacle.y
    ) {
        alert("Game Over! Pontuação: " + score);
        location.reload();
    }

    drawRect(player);
    drawRect(obstacle);

    requestAnimationFrame(update);
}

update();
