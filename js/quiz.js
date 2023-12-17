var currentQuestion = 1;

function nextQuestion() {
  var currentQuestionDiv = document.getElementById('question' + currentQuestion);
  currentQuestionDiv.style.display = 'none';

  currentQuestion++;
  var nextQuestionDiv = document.getElementById('question' + currentQuestion);

  if (nextQuestionDiv) {
    nextQuestionDiv.style.display = 'block';
  } else {
    // Toutes les questions ont été répondues, afficher le résultat
    calculateScore();
  }
}

function calculateScore() {
    var score = 0;
    var answers = {
      question1: "c", 
      question2:"b",
      question3:"b",
      question4:"a",
      question5: "b", 
      question6:"a",
      question7:"b",
      question8:"b",
      question9: "c", 
      question10:"c",
      question11:"b",
      question12:"b",
    };

    // Vérifier les réponses
    for (var i = 1; i <= Object.keys(answers).length; i++) {
      var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
      if (selectedOption) {
        if (selectedOption.value === answers['question' + i]) {
          score++;
        }
      }
    }

    // Afficher le résultat
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Votre score est de ' + score + ' sur ' + Object.keys(answers).length;

    // Ajoutez des messages personnalisés en fonction du score
    if (score === Object.keys(answers).length) {
      resultContainer.innerHTML += '<p>Bravo! Vous avez eu tout bon.</p>';

    } else {
      resultContainer.innerHTML += '<p>Merci d\'avoir participé. Vous pouvez réessayer pour améliorer votre score.</p>';
    }
  }