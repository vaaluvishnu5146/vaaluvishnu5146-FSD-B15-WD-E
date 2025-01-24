let currentQuestion = 0;

const questions = [
    {
        id: 1,
        title: "What is Abbrevation of HTML",
        option: [
            {
                id: 1,
                value: "Hyper text markup language",
                isCorrect: true
            },
            {
                id: 2,
                value: "Hyper market",
                isCorrect: false
            },
            {
                id: 3,
                value: "Hyperbola",
                isCorrect: false
            },
            {
                id: 4,
                value: "Hyper tension",
                isCorrect: false
            }
        ]
    },
    {
        id: 2,
        title: "What is Abbrevation of CSS",
        option: [
            {
                id: 1,
                value: "Cascading style sheet",
                isCorrect: true
            },
            {
                id: 2,
                value: "Consumer service society",
                isCorrect: false
            },
            {
                id: 3,
                value: "Class style song",
                isCorrect: false
            },
            {
                id: 4,
                value: "No abbrevation",
                isCorrect: false
            }
        ]
    },
];

const assessmentData = {
};
    
// GET ALL ELEMENTS FROM DOM
const currentQuestionText = document.getElementById('currentQuestion');
const totalNumOfQuestion = document.getElementById('totalNumOfQuestion');
const title = document.getElementById("title");
const optionsContainer = document.getElementById('options-container');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');

// Add Event Listeners
backBtn.addEventListener("click", function (e) {
    currentQuestion -= 1;
    renderQuiz(questions[currentQuestion]);
    trackNavigatingCta();
});

nextBtn.addEventListener("click", function (e) {
    currentQuestion += 1;
    renderQuiz(questions[currentQuestion]);
    trackNavigatingCta();
});

function initializeQuiz() {
    renderQuiz(questions[currentQuestion]);
    trackNavigatingCta();
};

function renderQuiz(question = {}) {
   currentQuestionText.innerText = currentQuestion + 1;
   totalNumOfQuestion.innerText = questions.length;
   title.innerText = question.title;
   optionsContainer.innerHTML = "";
   optionsContainer.append(...createOptions(question.option)); // ---Spread operator
}

function createOptions(list = []) {
    const _o = [];
    for(let l = 0; l < list.length; l++) {
        const optionEl = document.createElement('button');
        attachEventListenerToOption(optionEl);
        optionEl.setAttribute("class", "w-full h-12  rounded border-2 border-gray-300 hover:border-fuchsia-800 ");
        if(Number(assessmentData[currentQuestion + 1]) && (l + 1 === Number(assessmentData[currentQuestion + 1]))) {
            findAndAddActiveClass(optionEl);
        }
        optionEl.setAttribute("id", list[l]['id']);
        optionEl.innerText = list[l]['value'];
        _o.push(optionEl);
    }
    return _o;
}

function attachEventListenerToOption(element) {
    if(element) {
        element.addEventListener("click", function (e) {
            findAndRemoveActiveClass();
            findAndAddActiveClass(e.target);
            assessmentData[currentQuestion + 1] = e.target.id;
            console.log(assessmentData);
        })
    }
}

function findAndRemoveActiveClass() {
    const activeButton = optionsContainer.querySelector('button.bg-fuchsia-800.text-white');
    if(activeButton && activeButton.classList.contains("bg-fuchsia-800")) {
        activeButton.classList.remove("bg-fuchsia-800")
        activeButton.classList.remove("text-white")
    }
}

function findAndAddActiveClass(element) {
    element.classList.add("bg-fuchsia-800");
    element.classList.add("text-white");
}

function trackNavigatingCta() {
    if(currentQuestion + 1 ===  questions.length) {
        nextBtn.setAttribute("disabled", true);
        backBtn.removeAttribute('disabled');
    } else if (currentQuestion === 0) {
        backBtn.setAttribute("disabled", true)
        nextBtn.removeAttribute('disabled');
    } else {
        nextBtn.removeAttribute('disabled');
        backBtn.removeAttribute('disabled');
    }
}

initializeQuiz();