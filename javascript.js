function flipper() {
    var element = document.getElementById("cardID");
    element.classList.toggle("flip");
  }

/* Button Colors

let answerButtons = document.getElementsByClassName('button');

answerButtons.addEventListener('click', selectAnswer);

function selectAnswer(e) {
  const selectedAnswer = e.target
  const correct = self.activeQuestion().rightAnswer

  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
}
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
*/