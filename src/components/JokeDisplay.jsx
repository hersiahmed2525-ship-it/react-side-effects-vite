function Joke({ joke, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <p>{joke}</p>;
}

export default Joke;
