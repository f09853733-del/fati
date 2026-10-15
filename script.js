function clickerGame(area) {
    let score = 0;
    let time = 10;
    let running = false;
    let timer = null;

    addText(area, "در ۱۰ ثانیه بیشترین تعداد کلیک را ثبت کن!");

    const scoreText = makeElement("p", "امتیاز: ۰", "score");
    const timeText = makeElement("p", "زمان: ۱۰ ثانیه");

    area.append(scoreText, timeText);

    const button = addButton(area, "شروع بازی", start);

    function start() {
        if (running) {
            score++;
            scoreText.textContent = `امتیاز: ${score}`;
            return;
        }

        score = 0;
        time = 10;
        running = true;

        scoreText.textContent = "امتیاز: ۰";
        timeText.textContent = "زمان: ۱۰ ثانیه";
        button.textContent = "کلیک کن! ⚡";

        timer = setInterval(() => {
            time--;
            timeText.textContent = `زمان: ${time} ثانیه`;

            if (time <= 0) {
                clearInterval(timer);
                timer = null;
                running = false;
                button.textContent = "شروع دوباره";
                scoreText.textContent = `نتیجه: ${score} کلیک`;
            }
        }, 1000);
    }

    return () => {
        if (timer !== null) clearInterval(timer);
    };
}
