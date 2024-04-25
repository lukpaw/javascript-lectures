const questions = [
    {
        question: "What is the capital of France?",
        answer: "A",
        options: ["A) Paris", "B) London", "C) Berlin", "D) Rome"],
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: "C",
        options: ["A) Mount Everest", "B) K2", "C) Mount Kilimanjaro", "D) Mount Fuji"],
    },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;

    document.getElementById("answer-a").textContent = question.options[0];
    document.getElementById("answer-b").textContent = question.options[1];
    document.getElementById("answer-c").textContent = question.options[2];
    document.getElementById("answer-d").textContent = question.options[3];
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    const correctAnswer = question.answer;

    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = `Incorrect. The correct answer is ${question.options[correctAnswer.charCodeAt(0) - 65]}`;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const message = confirm("Quiz Over! Your score is " + score + "/" + questions.length + ". Play again?");
        if (message) {
            currentQuestion = 0;
            score = 0;
            displayQuestion();
            document.getElementById("feedback").textContent = "";
        } else {
            alert("Thanks for playing!");
        }
    }
}