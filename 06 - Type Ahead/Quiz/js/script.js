const questionElements = document.querySelector('#question');
const ansBtnElements = document.querySelector('#answer-buttons')
const startBtn = document.querySelector('#start-btn');
const nextBtn = document.querySelector('#next-btn');
const questionContainer = document.querySelector('#question-container');

let shuffleQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    questionContainer.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5); //ata ke anather way te likhte hove(task)
    currentQuestionIndex = 0;
    startBtn.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElements.innerHTML = question.question;
    console.log(question.ans)
    question.ans.forEach(ans => {
        const button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = ans.text;
            ansBtnElements.appendChild(button);
            if(ans.correct) {
                button.dataset.correct = ans.correct;
            }
            button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide');
    while(ansBtnElements.firstChild) {
        ansBtnElements.removeChild(ansBtnElements.firstChild)
    }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(ansBtnElements.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
  });
  if(shuffleQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
      startBtn.innerText = 'Restart';
      startBtn.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'what is 2 + 2?',
        ans: [
            {text: '2', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: 'what is 10 + 10?',
        ans: [
            {text: '20', correct: true},
            {text: '100', correct: false}
        ]
    }
]
