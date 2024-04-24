const qas = document.querySelectorAll('.qa')

// Default visibility
qas[0].querySelector('.answer').style.display = 'block';
qas[0].querySelector('.question .plus img').src = 'assets/images/icon-minus.svg'


const displayAnswerFunc = function displayAnswer(questionPlusSign, answer) {
    if (answer.style.display == '') {
        questionPlusSign.querySelector('img').src = 'assets/images/icon-minus.svg'
        answer.style.display = 'block';
    } else {
        answer.style.display = '';
        questionPlusSign.querySelector('img').src = 'assets/images/icon-plus.svg'
    }
}

qas.forEach(qa => {
    let questionLink = qa.querySelector('.question h4')
    let questionPlusSign = qa.querySelector('.question .plus')
    let answer = qa.querySelector('.answer')
    questionLink.addEventListener('click', () => {
        displayAnswerFunc(questionPlusSign, answer)
    });
    questionPlusSign.addEventListener('click', () => {
        displayAnswerFunc(questionPlusSign, answer)
    });
});
