// Questions data
const questions = [
    // Hindi questions
    { question: "गंगा नदी कहाँ बहती है?", options: ["उत्तर भारत", "दक्षिण भारत", "पूर्व भारत", "पश्चिम भारत"], answer: 0 },
    { question: "भारत के राष्ट्रपिता कौन हैं?", options: ["गांधीजी", "नेहरूजी", "सरदार पटेल", "डॉ. अम्बेडकर"], answer: 0 },
    { question: "स्वतंत्रता दिवस कब मनाया जाता है?", options: ["26 जनवरी", "15 अगस्त", "2 अक्टूबर", "14 नवंबर"], answer: 1 },
    { question: "भारत का राष्ट्रीय पक्षी क्या है?", options: ["मोर", "तोता", "कौआ", "हंस"], answer: 0 },
    { question: "भारत का राष्ट्रीय फल क्या है?", options: ["आम", "सेब", "केला", "संतरा"], answer: 0 },
    // English questions
    { question: "What is the synonym of 'Happy'?", options: ["Sad", "Joyful", "Angry", "Excited"], answer: 1 },
    { question: "What is the opposite of 'Big'?", options: ["Large", "Huge", "Small", "Tiny"], answer: 2 },
    { question: "How many vowels are there in the English alphabet?", options: ["3", "5", "7", "9"], answer: 1 },
    { question: "What is the plural of 'Child'?", options: ["Childs", "Children", "Childes", "Childer"], answer: 1 },
    { question: "Which one is a noun?", options: ["Run", "Quickly", "Book", "Green"], answer: 2 },
    // Math questions
    { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "What is the square of 4?", options: ["8", "12", "16", "20"], answer: 2 },
    { question: "What is 12 ÷ 4?", options: ["3", "4", "6", "8"], answer: 0 },
    { question: "What is the value of π?", options: ["2.14", "3.14", "4.14", "5.14"], answer: 1 },
    { question: "What is 15 - 5?", options: ["5", "10", "15", "20"], answer: 1 },
    // Science questions
    { question: "What is H2O?", options: ["Oxygen", "Hydrogen", "Water", "Carbon"], answer: 2 },
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
    { question: "What gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
    { question: "What is the boiling point of water?", options: ["50°C", "100°C", "150°C", "200°C"], answer: 1 },
    { question: "Which organ pumps blood in the body?", options: ["Liver", "Brain", "Heart", "Kidney"], answer: 2 }
  ];
  
  // Render questions
  function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
      const questionBlock = document.createElement('div');
      questionBlock.classList.add('p-4', 'border', 'rounded-md', 'bg-gray-50');
      questionBlock.setAttribute('data-index', index);
      questionBlock.innerHTML = `
        <h2 class="font-medium">${index + 1}. ${q.question}</h2>
        ${q.options
          .map(
            (option, i) =>
              `<label class="block mt-2">
                <input type="radio" name="question-${index}" value="${i}" class="mr-2">
                ${option}
              </label>`
          )
          .join('')}
      `;
      quizContainer.appendChild(questionBlock);
    });
  }
  
  // Evaluate quiz
  function evaluateQuiz() {
    let score = 0;
    const resultContainer = document.getElementById('result');
    questions.forEach((q, index) => {
      const questionBlock = document.querySelector(`[data-index="${index}"]`);
      const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
      const correctOption = questionBlock.querySelector(`input[value="${q.answer}"]`).parentElement;
  
      // Reset all options to default background
      questionBlock.querySelectorAll('label').forEach((label) => label.classList.remove('bg-green-200', 'bg-red-200'));
  
      if (selectedOption) {
        const selectedLabel = selectedOption.parentElement;
        if (parseInt(selectedOption.value) === q.answer) {
          score++;
          selectedLabel.classList.add('bg-green-200'); // Correct answer
        } else {
          selectedLabel.classList.add('bg-red-200'); // Incorrect answer
        }
      }
      // Highlight the correct answer
      correctOption.classList.add('bg-green-200');
    });
  
    resultContainer.textContent = `Your Score: ${score}/${questions.length}`;
  }
  
  // Initialize quiz
  document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();
    document.getElementById('submit-btn').addEventListener('click', evaluateQuiz);
  });
  