import Header from "../components/Header"
import MovieList from "../components/MovieCard";
import styles from "../styles/Pages/HomePage.module.css"

const HeaderPage: React.FC = () => {
    return (
        <>
        <Header />
        <MovieList />
        </>
    )
}

export default HeaderPage;