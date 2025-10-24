<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> de71392e4310b5f46478b23ec0d8039d8bfd59dd
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import type { MovieCardProps } from "../types/MovieCardProps";
import styles from "../styles/components/MovieCard.module.css";
import { mockMovies } from "../mockDate/MovieCard";
import { Navigation, Scrollbar } from "swiper/modules";

const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl, description, year, duration, rating }) => {
  return (
    <div className={styles.movieCardWrapper}>
      <div className={styles.movieCard}>
        <img src={imageUrl} alt={`${title} poster`} />
        <div className={styles.cardDescription}>{description}</div>
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
  );
};

const MovieSlider: React.FC = () => {
  return (
<<<<<<< HEAD
    <Swiper
      modules={[Navigation, Scrollbar]}
      navigation
      spaceBetween={30}
      slidesPerView="auto"
      freeMode={true}
      style={{ overflow: 'visible' }}
    >
      {mockMovies.map((movie) => (
        <SwiperSlide 
          key={movie.id} 
          style={{ 
            width: "11rem", 
            overflow: "visible"
          }}
        >
          <MovieCard {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSlider;
>>>>>>> develop
=======
    <div className={styles.sliderContainer}> 
      <Swiper
        modules={[Navigation, Scrollbar]}
        navigation
        spaceBetween={30}
        slidesPerView="auto"
        freeMode={true}
        style={{ overflow: 'visible' }}
      >
        {mockMovies.map((movie) => (
          <SwiperSlide 
            key={movie.id} 
            style={{ 
              width: "11rem", 
              overflow: "visible"
            }}
          >
            <MovieCard {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
>>>>>>> de71392e4310b5f46478b23ec0d8039d8bfd59dd
