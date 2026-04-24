const quizData = [
    {
        question: "Що таке HTML?",
        a: "Мова програмування",
        b: "Мова розмітки",
        c: "Операційна система",
        correct: "b"
    },
    {
        question: "Що таке CSS?",
        a: "Стиль сторінки",
        b: "База даних",
        c: "Браузер",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");

quizData.forEach((q, index) => {
    quiz.innerHTML += `
        <div>
            <p>${q.question}</p>
            <label><input type="radio" name="q${index}" value="a"> ${q.a}</label><br>
            <label><input type="radio" name="q${index}" value="b"> ${q.b}</label><br>
            <label><input type="radio" name="q${index}" value="c"> ${q.c}</label>
        </div>
    `;
});

function checkAnswers() {
    let score = 0;

    quizData.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if (answer && answer.value === q.correct) {
            score++;
        }
    });

    document.getElementById("result").innerText = "Ваш результат: " + score;
}