import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  //store our from and to languages in state
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");
  //store the word we want to translate in state
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  //on change function for the from and to states

  //on change function for the input of the work we want to translate
  /*handleChange;*/
  //this function will also call out API and get the translation

  //on submit funtion that calls our API to get the translation
  async function handleTranslate(event) {
    event.preventDefault();
    const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data.translation);
  }

  return (
    <>
      <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ko">Korean</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>

        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ko">Korean</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <div className="Output">{translation}</div>
        </div>
        <button>Submit</button>
      </form>
      {/*Show our translation*/}
      {/*STRETCH: show a gif from the GIPHY API that matches the translation */}
    </>
  );
}

//make it look like a translation app, make it work on a mobile app.
//introduce the images

export default App;
