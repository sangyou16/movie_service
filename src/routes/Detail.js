import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";


function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);

    console.log(json.data.movie);
};

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div> 
    {loading ? (<h1>Loading...</h1>)
    : (
    <div>
        <h1>{movies.title}</h1>
        <img src = {movies.medium_cover_image}/>
        <h2>Introductions:</h2>
        <h4>{movies.description_intro}</h4>
        <p>Langauge: {movies.language}</p>
        <p>Year of creation: {movies.year}</p>
        <p>Rating: {movies.rating}</p>
        <p>Genre:</p>
        <ul>
            {movies.genres.map((g) => (<li key = {movies.genres}>{g}</li>))} 
        </ul>
        <p>Download count: {movies.download_count}</p>

    </div>
  )}    
</div>
  );

}
export default Detail;