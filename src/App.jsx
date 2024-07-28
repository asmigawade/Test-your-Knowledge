import React, { useState, useEffect } from 'react';
import './app.css';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("Rs 0");
  const [isWinner, setIsWinner] = useState(false);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie series?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo DiCaprio",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which is the single largest internal organ by mass in the human body?",
      answers: [
        {
          text: "Stomach",
          correct: false,
        },
        {
          text: "Kidney",
          correct: false,
        },
        {
          text: "Gallbladder",
          correct: false,
        },
        {
          text: "Liver",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which of these is a non-renewable source of energy?",
      answers: [
        {
          text: "Wind power",
          correct: false,
        },
        {
          text: "Natural gas",
          correct: true,
        },
        {
          text: "Solar power",
          correct: false,
        },
        {
          text: "Hydro power",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which of these does the carpenter use to smoothen the surface of wooden furniture?",
      answers: [
        {
          text: "Sandpaper",
          correct: true,
        },
        {
          text: "Butter paper",
          correct: false,
        },
        {
          text: "Silver paper",
          correct: false,
        },
        {
          text: "Tissue paper",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What colour did Lord Shiva’s throat turn into when he drank the deadly poison during Samudra Manthan?",
      answers: [
        {
          text: "Blue",
          correct: true,
        },
        {
          text: "Yellow",
          correct: false,
        },
        {
          text: "Black",
          correct: false,
        },
        {
          text: "Red",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the capital city of India?",
      answers: [
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
        {
          text: "Kolkata",
          correct: false,
        },
        {
          text: "Chennai",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "Stephen King",
          correct: false,
        },
        {
          text: "Dan Brown",
          correct: false,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which country is famous for the Great Wall?",
      answers: [
        {
          text: "Japan",
          correct: false,
        },
        {
          text: "China",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who was the first President of the United States?",
      answers: [
        {
          text: "Thomas Jefferson",
          correct: false,
        },
        {
          text: "George Washington",
          correct: true,
        },
        {
          text: "Abraham Lincoln",
          correct: false,
        },
        {
          text: "John Adams",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "10,000" },
    { id: 2, amount: "20,000" },
    { id: 3, amount: "40,000" },
    { id: 4, amount: "80,000" },
    { id: 5, amount: "1,60,000" },
    { id: 6, amount: "3,20,000" },
    { id: 7, amount: "6,40,000" },
    { id: 8, amount: "12,50,000" },
    { id: 9, amount: "25,00,000" },
    { id: 10, amount: "50,00,000" },
    { id: 11, amount: "1 Crore" },
    { id: 12, amount: "7 Crore" },
  ].reverse();

  useEffect(() => {
    // Update earned amount based on questionNumber and moneyPyramid
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  useEffect(() => {
    // Check if the player has reached the last question (7 Crores)
    if (questionNumber > moneyPyramid.length) {
      setStop(true); 
      setIsWinner(true);// Stop the game
    }
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              isWinner ? (
                // Display winning image when isWinner is true
                <div className="endText">
                  {/* <img src="./assets/winner.jpeg" alt="Winner" /> */}
                  <h1>Congratulations!</h1>
                  <p>You have won the game and earned: {earned}</p>
                </div>
              ) : (
                // Display earned amount if not a winner
                
                <h1 className="endText">You earned: {earned}</h1>
              )
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={questionNumber === m.id ? "moneyItem active" : "moneyItem"}
                >
                  <span className="moneynum">{m.id}</span>
                  <span className="moneyamt">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
