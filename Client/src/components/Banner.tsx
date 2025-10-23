import styles from "../styles/components/Banner.module.css";
import banner from "../assets/banners/movieBanner.jpg";

export const Banner: React.FC = () => {
    return (
        <div className={styles.bannerContainer}>
            <img src={banner} alt="Баннер с фильмом" />
        </div>
    )
}