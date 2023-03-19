
import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
      <div className = {styles.container}> 
      {loading ? (<div className={styles.loader}>
          <span>Loading...</span>
        </div>)
      : (
      <div className={styles.movies}>
        {movies.map( (movie) => (
          <Movie
            key = {movie.id}
            coverImg={movie.medium_cover_image} 
            title = {movie.title} 
            year = {movie.year}
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