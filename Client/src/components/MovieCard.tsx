import type { MovieCardProps } from "../types/MovieCardProps";
import styles from "../styles/components/MovieCard.module.css";
import { mockMovies } from "../mockDate/MovieCard";

const MovieCard: React.FC<MovieCardProps> = ({title, imageUrl, description, year, duration, rating}) => {
    return (
        <div className={styles.movieCardWrapper}>
            <div className={styles.movieCard}>
                <img src={imageUrl} alt="movieImag" />
                <div className={styles.cardDescription}>
                    {description}
                </div>
            </div>
            <div className={styles.movieInfo}>
                <h3 className={styles.movieTitle}>{title}</h3>
                <div className={styles.movieDetails}>
                    <span>{year}</span>
                    <span>{duration}</span>
                    <span className={styles.rating}>{rating}</span>
                </div>
            </div>
        </div>
    )
}

const MovieList: React.FC = () => {
    return (
        <div className={styles.moviesGrid}>
            {mockMovies.map(movie => (
                <MovieCard key={movie.id} {...movie}/>
            ))}
        </div>
    )
}
export default MovieList;