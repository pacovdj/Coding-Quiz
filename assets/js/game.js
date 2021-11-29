const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is an array in Javascript?',
        choice1: 'The skeleton of a webpage.',
        choice2: 'The styling of a webpage.',
        choice3: 'A single varible that is used to store different elements',
        choice3: 'None of the above',
        answer: 3,
    },

    {
        question: 'Which is the best definition of a Javascript variable?',
        choice1: 'Jargon used by developers to describe an unexpected challenge when coding',
        choice2: 'A place to store a data value that can be changed later on',
        choice3: 'A messaged detailing where an error occured in a Javascript file',
        choice4: 'A best practice that makes Javascript easier to read and understand',
        answer: 2,   
    },

    {
        question: 'Which the the best definition of a constant in Javascript?',
        choice1: 'A best practice that keeps Javascript code from breaking',
        choice2: 'A punctuation mark that makes Javascript easier to read',
        choice3: 'A constant is a variable and a variable is a constant',
        choice4: 'A constant is a type of variable whose value cannot be changed',
        answwer: 4,

    },

    {
       question: 'Which is the best definition of a Javascript function?',
       choice1: 'A block of code designed to perform a particular task',
       choice2: 'A Javascript enhancement that allows objects to appear to move on a webpage',
       choice3: 'A function is the same as an argument',
       choice4: 'None of the above',
       answer: 1, 
    }

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore'), score

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
}

choices.forEach(choice => {
    const number  = choice.dataset['number']
    choice.innerText = currentQuestion['choice + number']
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true


choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    