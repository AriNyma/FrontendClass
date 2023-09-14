import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Komponentti from './Komponentti';
import Uutissivu from './components/Uutissivu';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const uutisLista = [
    {nro: 1, vinkki: "Talous", teksti: "EKP:n ohjauskorko n. 4 %", linkki: "https://www.google.fi"},
    {nro: 2, vinkki: "Viihde", teksti: "xxx", linkki: "https://www.google.fi"},
    {nro: 3, vinkki: "Politiikka", teksti: "Marin eroaa", linkki: "https://www.google.fi"},
    {nro: 4, vinkki: "Rikos", teksti: "Punainen Golf..", linkki: "https://www.google.fi"},
    {nro: 4, vinkki: "Maatalous", teksti: "Susiuhka", linkki: "https://www.google.fi"}
]

root.render(
  <React.StrictMode>
    {/*<Komponentti nro={1} väri={"red"} back={"pink"} luokka="abc"/>*/}
    {/*<Komponentti nro={2} väri={"green"} back={"lightgreen"} luokka="def"/>*/}
    {/*<Komponentti nro={3} väri={"blue"} back={"lightblue"} luokka="xyz"/>*/}
    <Uutissivu uutiset={uutisLista}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
