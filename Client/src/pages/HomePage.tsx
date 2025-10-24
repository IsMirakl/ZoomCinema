import Header from "../components/Header"
import MovieList from "../components/MovieCard";

import { Banner } from "../components/Banner";

import styles from "../styles/Pages/HomePage.module.css"
import Footer from "../components/Footer";


const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <main>
                <div className={styles.noveltyCategory}>
                    <h1 className={styles.headingCategory}>Новинки</h1>
                    <MovieList />
                </div>
                <div className={styles.popularCategory}>
                    <h1 className={styles.headingCategory}>Популярные</h1>
                    <MovieList />
                </div>
                <div className={styles.popularCategory}>
                    <h1 className={styles.headingCategory}>Скоро в прокате</h1>
                    <MovieList />
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;