const quiz_1=   {
    "quizTitle": "Guess the diagnosis",
    "questions": [
      {
        "question": "What do you think these symptoms maybe?",
        "questionType": "text",
        "answers": [
          "Influenza",
          "Covid-19",
          "Common cold",
          "Pharyngitis"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "You guessed it right!",
        "messageForInorrectAnswer": "Try again",
        "explanation": "Anosmia is typical of Covid",
        "point": "10"
      }
    ]
  };
  const quiz_2=   {
    "quizTitle": "Guess the diagnosis",
    "questions": [
      {
        "question": "Now that you know the symptoms, what do you think this might be?",
        "questionType": "text",
        "answers": [
          "Stroke",
          "Encephalitis",
          "Parkison's Disease",
          "Myasthenia Gravis"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "You guessed it right!",
        "messageForInorrectAnswer": "Try again",
        "explanation": "Unilateral rigidity and weakness are features of parkinson's disease",
        "point": "10"
      }
    ]
  }

  export {quiz_1,quiz_2};