document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('start-btn');
  const nextButton = document.getElementById('next-btn');
  const restartButton = document.getElementById('restart-btn');
  const quizContainer = document.getElementById('quiz-container');
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  const countdownElement = document.getElementById('countdown');
  const questionImageElement = document.getElementById('question-image');
  const questionElement = document.getElementById('question');
  const choice1Element = document.getElementById('choice1-text');
  const choice2Element = document.getElementById('choice2-text');
  const choice3Element = document.getElementById('choice3-text');
  const totalQuestionsElement = document.getElementById('total-questions');
  const correctAnswersElement = document.getElementById('correct-answers');
  const scoreElement = document.getElementById('score');

  let currentQuestionIndex = 0;
  let countdown;
  let score = 0;
  let totalQuestions = 0;
  let correctAnswers = 0;

  const questions = [
      {
        question: "¿Qué mostrará?",
        choices: ["NaN", "15", "105"],
        correctAnswer: 2,
        image: "Imatges exi/1.png"
      },
      {
        question: "¿Este código funciona?",
        choices: ["Sí y muestra 10", "Sí y muestra 25", "No"],
        correctAnswer: 1,
        image: "Imatges exi/2.png"
      },
      {
        question: "¿Este código funciona?",
        choices: ["No", "Sí y muestra 7", "Sí y muestra 52"],
        correctAnswer: 2,
        image: "Imatges exi/3.png"
      },
      {
        question: "¿Qué valor mostrará el alert?",
        choices: ["1", "5", "0"],
        correctAnswer: 2,
        image: "Imatges exi/4.png"
      },
      {
        question: "¿Este código funciona?",
        choices: ["No", "Sí y muestra 0", "Sí y muestra 12"],
        correctAnswer: 2,
        image: "Imatges exi/5.png"
      },
      {
        question: "¿Qué valor muestra?",
        choices: ["true", "2 €", "10 €"],
        correctAnswer: 1,
        image: "Imatges exi/6.png"
      },
      {
        question: "¿Qué valor muestra el alert?",
        choices: ["8", "6", "5"],
        correctAnswer: 1,
        image: "Imatges exi/7.png"
      },
      {
        question: "¿Qué mostrará por pantalla?",
        choices: ["Volvo Saab Ford", "Saab Ford", "Ford"],
        correctAnswer: 1,
        image: "Imatges exi/8.png"
      },
      {
        question: "¿Qué mostrará en pantalla?",
        choices: ["Juanito", "Maria", "Juanito Maria"],
        correctAnswer: 1,
        image: "Imatges exi/9.png"
      },
      {
        question: "¿Qué mostrará el alert?",
        choices: ["L1", "L2", "demo2"],
        correctAnswer: 1,
        image: "Imatges exi/10.png"
      }
    ];

  function startQuiz() {
    startButton.style.display = 'none';
    quizContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    totalQuestions = questions.length;
    totalQuestionsElement.textContent = totalQuestions;
    showNextQuestion();
    startCountdown();
  }

  function showNextQuestion() {
    resetQuestionState();
    if (currentQuestionIndex < totalQuestions) {
      const question = questions[currentQuestionIndex];
      questionImageElement.src = question.image;
      questionElement.textContent = question.question;
      choice1Element.textContent = question.choices[0];
      choice2Element.textContent = question.choices[1];
      choice3Element.textContent = question.choices[2];
      currentQuestionIndex++;

      // Mostrar el botón de siguiente pregunta
      nextButton.style.display = 'block';
    } else {
      endQuiz();
    }
  }

  function resetQuestionState() {
    nextButton.style.display = 'none';
    choice1Element.parentNode.style.display = 'block';
    choice2Element.parentNode.style.display = 'block';
    choice3Element.parentNode.style.display = 'block';
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
  }

  function selectAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
      const selectedAnswer = parseInt(selectedChoice.value);
      const currentQuestion = questions[currentQuestionIndex - 1];
      if (selectedAnswer === currentQuestion.correctAnswer) { //Si la respuesta selecionada por el usuario es la correcta sumamos 1
        score++; 
        correctAnswers++;
      }
      nextButton.style.display = 'block';
      choice1Element.parentNode.style.display = 'none';
      choice2Element.parentNode.style.display = 'none';
      choice3Element.parentNode.style.display = 'none';
    }
  }

  function startCountdown() {
    let secondsLeft = 120;
    countdownElement.textContent = secondsLeft;

    countdown = setInterval(function() {
      secondsLeft--;
      countdownElement.textContent = secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        endQuiz();
      }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(countdown);
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    correctAnswersElement.textContent = correctAnswers;
    scoreElement.textContent = score;

    // Guardar la puntuación más alta utilizando localStorage
    const highScore = localStorage.getItem('highScore');
    if (!highScore || score > highScore) {
      localStorage.setItem('highScore', score);
    }
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    resultContainer.style.display = 'none'; 
    questionContainer.style.display = 'block';
    showNextQuestion();
    startCountdown();
  }

  startButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', function() {
    if (currentQuestionIndex === totalQuestions) {
      endQuiz();
    } else {
      showNextQuestion();
    }
  });
  restartButton.addEventListener('click', restartQuiz);
});