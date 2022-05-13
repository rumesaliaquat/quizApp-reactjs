import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'which language used for building basic structure of website?',
      answerOptions: [
        { answerText: 'Hyper Text Markup Language', isCorrect: true },
        { answerText: 'Cascading Style Sheet', isCorrect: false },
        { answerText: 'Java Script', isCorrect: false },
        { answerText: 'python', isCorrect: false}
      ],
    },
    {
      questionText: 'Which language used for styling websites?',
      answerOptions: [
        { answerText: 'Cascading Style Sheet', isCorrect: true },
        { answerText: 'Hyper Text Markup Language', isCorrect: false }
      ],
    },
    {
      questionText: 'Dynamic website build by __________?',
      answerOptions: [
        { answerText: 'Java Script', isCorrect: true },
        { answerText: 'Cascading Style Sheet', isCorrect: false },
        { answerText: 'Hyper Text Markup Language', isCorrect: false }
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
          <h1>Quiz App</h1>
          {showScore ? (
            <div className='scoreLine'>
              You scored {score} out of {questions.length * 10}
            </div>) : (
            <>
              <div >
                <div>
                  <div className='quesNoRender'>Question No. {currentQuestion+1}/{questions.length}</div>
                </div>


                <div className='ques'>{questions[currentQuestion].questionText}</div>
                {/* {console.log(currentQuestion)} */}
              </div>
              <div className='ansDiv'>

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