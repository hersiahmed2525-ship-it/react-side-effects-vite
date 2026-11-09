import { useState, useEffect } from "react";
import Joke from "./components/JokeDisplay";
import FetchButton from "./components/FetchButton";

const JOKE_URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true); // ← true so "Loading..." shows on first render (test 1)
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(JOKE_URL);
      const data = await response.json(); // ← reads .json() (tests 2 & 3)
      setJoke(data.joke); // ← reads .joke
    } catch (err) {
      setError("Could not load a joke. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(); // ← runs once on mount (tests 1 & 2)
  }, []);

  return (
    <div className="App">
      <h1>Programming Jokes</h1>
      <Joke joke={joke} loading={loading} error={error} />
      <FetchButton onFetch={fetchJoke} /> // ← passes fetchJoke as prop (test 4
      & 5)
    </div>
  );
}

export default App;
