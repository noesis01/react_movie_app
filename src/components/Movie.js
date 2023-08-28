/* eslint-disable react/no-typos */
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({medium_cover_image, title, summary, genres, id}) {
    return (
        <div>
          <img src={medium_cover_image} alt="{title}"/>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
        <p>{summary}</p>
        <ul>
          {genres.map(g=> <li key={g}>{g}</li>)}
        </ul>
      </div>
    );
}

Movie.propTypes = {
    medium_cover_image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    id: propTypes.number.isRequired,
};

export default Movie;