import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJokes = async () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <>
      <div className="container">
        <h3>Don't Laugh Challenge</h3>
        <div className="joke">{joke}</div>
        <button className="btn" onClick={fetchJokes}>
          Get Another Joke
        </button>
      </div>
    </>
  );
}

export default App;
