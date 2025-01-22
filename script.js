document.getElementById("confettiBtn").addEventListener("click", () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const skew = 1;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return;
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            particleCount,
            startVelocity: 5,
            spread: 400,
            ticks: 60,
            gravity: 0.5,
            shapes: ["circle"], // 'circle' shape can be adjusted to look like hearts with colors
            colors: ["#FF0000", "#FF69B4", "#FF1493", "#FF4500", "#FF6347"], // red and pink shades
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2,
            },
        });

        requestAnimationFrame(frame);
    })();
});
