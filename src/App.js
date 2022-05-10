import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'HTML stands for?',
      answerOptions: [
        { answerText: 'Hyper Text Markup Language', isCorrect: true },
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'JS', isCorrect: false },
      ],
    },
    {
      questionText: 'CSS stands for?',
      answerOptions: [
        { answerText: 'Cascading Style Sheet', isCorrect: true },
        { answerText: 'html', isCorrect: false },
        { answerText: 'js', isCorrect: false },
      ],
    },
    {
      questionText: 'Js stands for?',
      answerOptions: [
        { answerText: 'Java Script', isCorrect: true },
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'HTml', isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const answerOptioncheck = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className='app'>
          <h3>Quiz App</h3>
          {showScore ? (
            <div>
              You scored {score} out of {questions.length * 10}
            </div>) : (
            <>
              <div >
                <div>
                  <span>Question {currentQuestion+1}</span>/{questions.length}
                </div>


                <div>{questions[currentQuestion].questionText}</div>
                {/* {console.log(currentQuestion)} */}
              </div>
              <div>

                {questions[currentQuestion].answerOptions.map((answerOption,index) => (
                  <button key={index} onClick={() => answerOptioncheck(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;