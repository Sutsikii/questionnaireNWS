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
  // Ajoutez plus de questions ici
];

const Home: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [scores, setScores] = useState<Score>({ dev: 0, marketing: 0, design: 0, cm: 0 });
  const [done, setDone] = useState<boolean>(false);

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
    <div>
      {done ? (
        <div>
          <h1>Votre spécialité recommandée est : {getHighestScoreCategory()}</h1>
        </div>
      ) : (
        <div>
          <h1>{questions[currentQuestion].question}</h1>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index} onClick={() => handleClick(answer.score)}>
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
