const faqQuestions = document.getElementById('faq-questions')
const faq = [
    {
        question: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question: "Is Frontend Mentor free?",
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    },
]

function renderFAQ() {
    let qNa = ''
    for (i=0; i<faq.length; i++) {
        if (i === faq.length - 1) {
            qNa += `
            <li id='question${i}' tabindex='0'>
                <h2>${faq[i].question}</h2>
                <img id='symbol${i}' class='symbol' src='assets/images/icon-plus.svg'/>
            </li>
            <p id='answer${i}' class='hidden'>${faq[i].answer}</p>
            `
        } else {
            qNa += `
            <li id='question${i}' tabindex='0'>
                <h2>${faq[i].question}</h2>
                <img id='symbol${i}' class='symbol' src='assets/images/icon-plus.svg'>
            </li>
            <p id='answer${i}' class='hidden'>${faq[i].answer}</p>
            <div class="break-line"></div>
            `
        }
    }
        faqQuestions.innerHTML += qNa
    }

renderFAQ()

isPlus = true


function showHide(questionId, answerId, symbolId) {
        let question = document.getElementById(questionId)
        let answer = document.getElementById(answerId)
        let symbol = document.getElementById(symbolId)

        question.addEventListener('click', function() {
            answer.classList.toggle('hidden')
            if (symbol.src.endsWith('icon-plus.svg')) {
                symbol.src = 'assets/images/icon-minus.svg'
            } else {
                symbol.src = 'assets/images/icon-plus.svg'
            }
        })

        question.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                question.click()
            }
        })
}


function setIds() {
    for (i=0; i<faq.length; i++) {
        showHide(`question${i}`, `answer${i}`, `symbol${i}`)
    }
}

setIds()




