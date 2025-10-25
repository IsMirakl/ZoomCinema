import style from '../styles/Pages/ProfilePage.module.css';
import Header from '../components/Header';

import filmStatIcon from '../assets/icons/filmsStats.svg';
import StarStat from '../assets/icons/StarsStats.svg';
import levelStat from '../assets/icons/levelStats.svg';
import calendarStat from '../assets/icons/calendarStats.svg';

const ProfilePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className={style.mainContainer}>
                <div className={style.mainInformationContainer}>
                    <div className={style.profileSection}>
                        <div className={style.profileAvatar}>
                            <a href="">
                                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid&w=740&q=80" alt="Аватарка" />
                            </a>
                        </div>
                        <div className={style.profileInfo}>     
                            <p>UserName</p>
                            <p>email@test.ru</p>
                        </div>
                    </div>
                    
                    <div className={style.profileStatistics}>
                        <div className={style.statItem}>
                            <div className={style.statHeader}>
                                <img src={filmStatIcon} alt="" />
                                <p>Фильмов</p>
                            </div>
                            <div className={style.statValue}>
                                <p>12</p>
                            </div>
                        </div>  
                        <div className={style.statItem}>
                            <div className={style.statHeader}>
                                <img src={StarStat} alt="" />
                                <p>Баллы</p>
                            </div>
                            <div className={style.statValue}>
                                <p>1,200</p>
                            </div>
                        </div>
                        <div className={style.statItem}>
                            <div className={style.statHeader}>
                                <img src={levelStat} alt="" />
                                <p>Уровень</p>
                            </div>
                            <div className={style.statValue}>
                                <p>Золотой</p>
                            </div>
                        </div>
                        <div className={style.statItem}>
                            <div className={style.statHeader}>
                                <img src={calendarStat} alt="" />
                                <p>С нами</p>
                            </div>
                            <div className={style.statValue}>
                                <p>1 год</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.profileTickets}>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default ProfilePage;
