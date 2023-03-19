import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({coverImg,title,summary,genres,id,year}){ // line 9.. now when it clicks the link it will add /movie/{id numb}

    return <div className = {styles.movie}>
    <img src= {coverImg} alt ={title} className = {styles.movie__img}/>
    <div>
      <h2 className = {styles.movie__title}>
        <Link to = {`/movie/${id}`}>{title}</Link>
      </h2> 
    <h3 className = {styles.movie__year}>{year}</h3>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...` :summary }</p>
    <ul className = {styles.movie__genres}>
      {genres.map((g) => (<li key = {genres}>{g}</li>))} 
    </ul>

    </div>
    </div> ;
}; 

Movie.propTypes ={ //check prop types of the Movie components
    coverImg: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

