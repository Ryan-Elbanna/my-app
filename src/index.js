import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const advices = [
  {
    advice:"“Run. Run fast and hard. Run until you can’t hear him yelling for you to stop. Get your will and go on your own terms. You don’t have to do anything that you don’t want to do. Don’t quit before the race even starts. Be a warrior. Understand that you’re doing what needs to be done and that whatever the future holds, it will be worth it.”",
  },
  {
    advice: "“Never feel guilty for your decisions. There will always be someone telling you that you are a coward and/or dishonoring your family’s sacrifice. There will always be those who judge you without knowing the circumstances. Do not let others hurt you with their cruel words. Stand tall. Stand your ground.”",
  },
  {
    advice:"“You will need to take a stand and work hard to achieve your goals, and you should only do so if you know that your performance is critical to your unit's success.”",
  },
  {
    advice: "“In the first place, this man is a man who deserves to live free and live with dignity in this country. That's not something he needs to live with.”",
  },
  {
    advice: "“In the first place, this man is a man who deserves to live free and live with dignity in this country. That's not something he needs to live with.”",
  },
  {
    advice: "“You are the only human that can save a wounded soldier from a car accident.”",
  },
  {
    advice: "“You have to be brave in the job of protecting the comrades who are defending the country, one of those who was injured by an attack says. But the soldiers who are defending the country are not brave.”",
  },
  {
    advice: "“A man goes to war to fight for freedom, to fight to protect those who cannot protect themselves, to fight to help those who cannot help themselves.”",
  },
  {
    advice: "“You protect the ones you love, you protect the ones you can”",
  },
  {
    advice: "“You are as honorable, courageous and as brave as you are slow to commit yourself, and you are as kind as you are quick to act.”",
  },
  {
    advice: "“Those who didn't die for something they believed in, to a large extent died for something they didn't believe in. For your nation, for the world, for ideals that you don't believe in.”"
  },
];

function App() {

  const [index, setIndex] = useState();

  const getAdvice = () => {
    const index = Math.floor(Math.random() * advices.length);
    setIndex(index);

    const advicesText = document.getElementById("adviceDisplay");
    advicesText.classList.add("fortnite");

    advicesText.addEventListener("animationend", function() {
      advicesText.classList.remove("fortnite");
    })

  };

  function militaryClock() {
    var mTime = new Date();
    var mHours = mTime.getHours();
    var mMinutes = mTime.getMinutes();
    var mSeconds = mTime.getSeconds();
    mMinutes = (mMinutes < 10 ? "0" : "") + mMinutes;
    mSeconds = (mSeconds < 10 ? "0" : "") + mSeconds;
    var displayMTime = "Military Time: " + mHours + ":" + mMinutes + ":" + mSeconds;
    document.getElementById("clock").innerHTML = displayMTime;
  }

  setInterval(militaryClock, 1000);

  return (
    <div className="App">
      <h1 id='clock'></h1>
      <h1>Advice for Soldiers</h1>
      <p className='briefInfo'>Hey soldier, do you want an advice or advices? Click the button below.</p>
      <div className='adviceContainer'>
      <p id='adviceDisplay'>{advices[index] && advices[index].advice}</p>
      </div>
      <button id='adviceButton' onClick={getAdvice}>Want an advice?</button>
    </div>
  );
}

root.render(<App/>);

// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
