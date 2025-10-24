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