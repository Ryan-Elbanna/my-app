import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import React, { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const advices = [
  {
    advice:"“Run. Run fast and hard. Run until you can’t hear him yelling for you to stop. Get your will and go on your own terms. You don’t have to do anything that you don’t want to do. Don’t quit before the race even starts. Be a warrior. Understand that you’re doing what needs to be done and that whatever the future holds, it will be worth it.”",
  },
  {
    advice: "“Never feel guilty for your decisions. There will always be someone telling you that you are a coward and/or dishonoring your family’s sacrifice. There will always be those who judge you without knowing the circumstances. Do not let others hurt you with their cruel words. Stand tall. Stand your ground.”",
  },
  {
    advice:"“Hey I am an advice.”",
  },
  {
    advice: "“I am also an advice.”",
  }
];

function App() {

  const [index, setIndex] = useState();

  const getAdvice = () => {
    const index = Math.floor(Math.random() * advices.length);
    setIndex(index);
  };

  
  return (
    <div className="App">
      <h1>Advice for Soldiers</h1>
      <div className='adviceContainer'>
      <p className='adviceDisplay'>{advices[index] && advices[index].advice}</p>
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
