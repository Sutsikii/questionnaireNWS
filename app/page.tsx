"use client"

import { useState } from 'react';

interface Score {
  dev?: number;
  marketing?: number;
  design?: number;
  cm?: number;
}

interface Answer {
  text: string;
  score: Score;
}

interface Question {
  question: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    question: 'Quel est votre outil préféré ?',
    answers: [
      { text: 'VS Code', score: { dev: 3 } },
      { text: 'Google Analytics', score: { marketing: 3 } },
      { text: 'Figma', score: { design: 3 } },
      { text: 'Twitter', score: { cm: 3 } },
    ],
  },
  {
    question: 'Comment préférez-vous travailler ?',
    answers: [
      { text: 'En équipe', score: { dev: 2, cm: 2 } },
      { text: 'Seul', score: { marketing: 2, design: 2 } },
      { text: 'Avec des clients', score: { cm: 2, marketing: 1 } },
      { text: 'Avec des développeurs', score: { dev: 3 } },
    ],
  },
  {
    question: 'Comment préférez-vous travailler ?',
    answers: [
      { text: 'En équipe', score: { dev: 2, cm: 2 } },
      { text: 'Seul', score: { marketing: 2, design: 2 } },
      { text: 'Avec des clients', score: { cm: 2, marketing: 1 } },
      { text: 'Avec des développeurs', score: { dev: 3 } },
    ],
  },
  {
    question: 'Comment préférez-vous travailler ?',
    answers: [
      { text: 'En équipe', score: { dev: 2, cm: 2 } },
      { text: 'Seul', score: { marketing: 2, design: 2 } },
      { text: 'Avec des clients', score: { cm: 2, marketing: 1 } },
      { text: 'Avec des développeurs', score: { dev: 3 } },
    ],
  },
  {
    question: 'Quel est votre réseau social préféré ?',
    answers: [
      { text: 'LinkedIn', score: { marketing: 3 } },
      { text: 'Instagram', score: { cm: 3, design: 1 } },
      { text: 'GitHub', score: { dev: 3 } },
      { text: 'Pinterest', score: { design: 2 } },
    ],
  },
  {
    question: 'Comment vous décririez-vous ?',
    answers: [
      { text: 'Créatif', score: { design: 3 } },
      { text: 'Analytique', score: { dev: 2, marketing: 2 } },
      { text: 'Sociable', score: { cm: 3 } },
      { text: 'Autonome', score: { marketing: 2, dev: 1 } },
    ],
  },
  {
    question: 'Quel est votre langage de programmation préféré ?',
    answers: [
      { text: 'JavaScript', score: { dev: 3 } },
      { text: 'SQL', score: { marketing: 2 } },
      { text: 'Je ne programme pas', score: { design: 3, cm: 2 } },
      { text: 'HTML & CSS', score: { dev: 2, design: 1 } },
    ],
  },
];

const Home: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [scores, setScores] = useState<Score>({ dev: 0, marketing: 0, design: 0, cm: 0 });
  const [done, setDone] = useState<boolean>(false);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ dev: 0, marketing: 0, design: 0, cm: 0 });
    setDone(false);
  };  

  const handleClick = (score: Score) => {
    const newScores = { ...scores };
    for (const [key, value] of Object.entries(score)) {
      const category = key as keyof Score;
      newScores[category] = (newScores[category] || 0) + (value || 0);
    }
    setScores(newScores);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setDone(true);
    }
  };

  const getHighestScoreCategory = (): string => {
    let max = -Infinity;
    let category = '';

    for (const [key, value] of Object.entries(scores)) {
      if (value! > max) {
        max = value!;
        category = key;
      }
    }

    return category;
  };

  return (
    <div className="container mx-auto p-6">
      {done ? (
        <div className="text-center">
          <h1 className="text-4xl mb-4">Votre spécialité recommandée est : {getHighestScoreCategory()}</h1>
          <button onClick={resetQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Réinitialiser le questionnaire
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl mb-4">{questions[currentQuestion].question}</h1>
          <ul className="space-y-4">
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index} 
                  onClick={() => handleClick(answer.score)} 
                  className="cursor-pointer bg-blue-200 hover:bg-blue-300 rounded py-2 px-4">
                {answer.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
