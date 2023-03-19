
import {useState, useEffect} from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true); //when running setLoading function the function App() component will run again 
    const [movies, setMovies] = useState([]);
    const getMovies = async() => { //async function 
      const response = await fetch ('https://yts.mx/api/v2/list_movies.json?minimum_rating=&sort_by=year'
      ); // instead of "then"
      const json = await response.json(); //take the json of response and make that into json.. await wrapping await.
      setMovies(json.data.movies);
      setLoading(false);
      console.log(json.data.movies);
    
    };
    useEffect(() => {
      getMovies()
    }, []);
  
    //if not loading we show the movies and we muse map() to do it 
    return (
      <div> 
      {loading ? (<h1>Loading...</h1>)
      : (
      <div>
        {movies.map( (movie) => (
          <Movie
            key = {movie.id}
            coverImg={movie.medium_cover_image} 
            title = {movie.title} 
            summary = {movie.summary}
            genres = {movie.genres}
            id = {movie.id}
            />
        ))}
      </div>
    )}    
  </div>
    );
}

export default Home;