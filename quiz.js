let selectedAnswer = "";
let score = 0;

const htmlQuestions = [

{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language",
        "High Text Machine Language"
    ],
    answer: "Hyper Text Markup Language"
},

{
    question: "Which tag is used for headings?",
    options: [
        "<p>",
        "<h1>",
        "<img>",
        "<div>"
    ],
    answer: "<h1>"
},

{
    question: "Which tag creates a link?",
    options: [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
    ],
    answer: "<a>"
},

{
    question: "Which tag is used to insert an image?",
    options: [
        "<img>",
        "<image>",
        "<pic>",
        "<src>"
    ],
    answer: "<img>"
},

{
    question: "Which tag is used to create a paragraph?",
    options: [
        "<text>",
        "<para>",
        "<p>",
        "<paragraph>"
    ],
    answer: "<p>"
},

{
    question: "Which attribute is used for links in the <a> tag?",
    options: [
        "src",
        "href",
        "link",
        "url"
    ],
    answer: "href"
},

{
    question: "Which tag is used to create a line break?",
    options: [
        "<lb>",
        "<break>",
        "<br>",
        "<line>"
    ],
    answer: "<br>"
},

{
    question: "Which tag is used for the largest heading?",
    options: [
        "<h6>",
        "<h3>",
        "<h1>",
        "<head>"
    ],
    answer: "<h1>"
}

];

const cssQuestions = [
     {
    question: "What does CSS stand for?",
    options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
},

{
    question: "Which property is used to change text color?",
    options: [
        "font-color",
        "text-color",
        "color",
        "background-color"
    ],
    answer: "color"
},

{
    question: "Which property changes the background color?",
    options: [
        "background-color",
        "bg-color",
        "color",
        "background"
    ],
    answer: "background-color"
},

{
    question: "Which property is used to change text size?",
    options: [
        "font-size",
        "text-size",
        "size",
        "font-style"
    ],
    answer: "font-size"
},

{
    question: "Which property makes text bold?",
    options: [
        "font-weight",
        "font-style",
        "text-bold",
        "bold"
    ],
    answer: "font-weight"
},

{
    question: "Which property aligns text to the center?",
    options: [
        "align",
        "text-align",
        "center",
        "font-align"
    ],
    answer: "text-align"
},

{
    question: "Which property adds space inside an element?",
    options: [
        "margin",
        "padding",
        "spacing",
        "border"
    ],
    answer: "padding"
},

{
    question: "Which property adds space outside an element?",
    options: [
        "padding",
        "margin",
        "spacing",
        "border"
    ],
    answer: "margin"
}
];

const javaQuestions = [

{
    question: "Java is a ____?",
    options: [
        "Programming Language",
        "Database",
        "Operating System",
        "Browser"
    ],
    answer: "Programming Language"
},

{
    question: "Which keyword is used to create a class in Java?",
    options: [
        "function",
        "class",
        "define",
        "new"
    ],
    answer: "class"
},

{
    question: "Which method is the entry point of a Java program?",
    options: [
        "start()",
        "run()",
        "main()",
        "execute()"
    ],
    answer: "main()"
},

{
    question: "Which symbol is used to end a statement in Java?",
    options: [
        ".",
        ":",
        ";",
        ","
    ],
    answer: ";"
},

{
    question: "Which keyword is used to create an object?",
    options: [
        "object",
        "create",
        "new",
        "class"
    ],
    answer: "new"
},

{
    question: "Java is developed by?",
    options: [
        "Google",
        "Microsoft",
        "Sun Microsystems",
        "Apple"
    ],
    answer: "Sun Microsystems"
},

{
    question: "Which data type stores whole numbers?",
    options: [
        "float",
        "char",
        "int",
        "boolean"
    ],
    answer: "int"
},

{
    question: "Which of these is a valid Java loop?",
    options: [
        "for",
        "repeat",
        "loop",
        "iterate"
    ],
    answer: "for"
}

];

const pythonQuestions = [

{
    question: "Python is a ____?",
    options: [
        "Programming Language",
        "Database",
        "Operating System",
        "Web Browser"
    ],
    answer: "Programming Language"
},

{
    question: "Who developed Python?",
    options: [
        "James Gosling",
        "Guido van Rossum",
        "Dennis Ritchie",
        "Bill Gates"
    ],
    answer: "Guido van Rossum"
},

{
    question: "Which symbol is used for comments in Python?",
    options: [
        "//",
        "/*",
        "#",
        "--"
    ],
    answer: "#"
},

{
    question: "Which function is used to display output in Python?",
    options: [
        "display()",
        "show()",
        "print()",
        "output()"
    ],
    answer: "print()"
},

{
    question: "Which data type stores text in Python?",
    options: [
        "int",
        "float",
        "str",
        "bool"
    ],
    answer: "str"
},

{
    question: "Which keyword is used for conditions in Python?",
    options: [
        "if",
        "when",
        "check",
        "condition"
    ],
    answer: "if"
},

{
    question: "Which loop is used to iterate over a sequence?",
    options: [
        "repeat",
        "for",
        "loop",
        "iterate"
    ],
    answer: "for"
},

{
    question: "Which of these is a Python list?",
    options: [
        "{1,2,3}",
        "(1,2,3)",
        "[1,2,3]",
        "<1,2,3>"
    ],
    answer: "[1,2,3]"
}

];

let questions = [];

const selectedCategory =
    localStorage.getItem("selectedCategory");

if(selectedCategory === "HTML"){
    questions = htmlQuestions;
}
else if(selectedCategory === "CSS"){
    questions = cssQuestions;
}
else if(selectedCategory === "JAVA"){
    questions = javaQuestions;
}
else if(selectedCategory === "PYTHON"){
    questions = pythonQuestions;
}
let currentQuestion = 0;

const questionText = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {

    questionNumber.innerText =
        `Question ${currentQuestion + 1}/${questions.length}`;

    questionText.innerText =
        questions[currentQuestion].question;

    optionButtons.forEach((button, index) => {

        button.innerText =
            questions[currentQuestion].options[index];

        button.classList.remove("selected");
        button.classList.remove("correct");
        button.classList.remove("wrong");

    });

}

optionButtons.forEach(button => {

    button.addEventListener("click", () => {

        optionButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedAnswer = button.innerText;

    });

});

nextBtn.addEventListener("click", () => {

    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    optionButtons.forEach(button => {

        if (button.innerText === correctAnswer) {
            button.classList.add("correct");
        }

        if (
            button.innerText === selectedAnswer &&
            selectedAnswer !== correctAnswer
        ) {
            button.classList.add("wrong");
        }

    });

    setTimeout(() => {

        selectedAnswer = "";

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            document.querySelector(".quiz-container").innerHTML = `

                <h1>🎉 Quiz Completed!</h1>

                <h2>Your Score: ${score}/${questions.length}</h2>

                <button id="next-btn" onclick="window.location.href='index.html'">
                    Play Again 🔄
                </button>

            `;

        }

    }, 1000);

});

loadQuestion();