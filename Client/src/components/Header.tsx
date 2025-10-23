import styles from "../styles/components/Header.module.css";
import { Link, NavLink } from "react-router-dom";

const ROUTES = {
    HOME: '/home',
    LOGIN: '/login',
    NEWS: '/news',
    SCHEDULE: '/schedule',
    CONTACTS: '/contacts',
    PROFILE: '/profile'
}

interface HeaderProps{
    logo?: string;
    siteName?: string;
}

interface NavItem {
    to: string;
    label: string;
}

const NAV_ITEMS: NavItem[] = [
    {to: ROUTES.HOME, label:'Главная'},
    {to: ROUTES.NEWS, label:'Новости'},
    {to: ROUTES.SCHEDULE, label: 'Расписание'},
    {to: ROUTES.CONTACTS, label: 'Контакты'}
]

const Header: React.FC<HeaderProps> = ({
    siteName = "Zoom Cinema"
})  => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <NavLink to='/home'>
                    <span>{siteName}</span>
                    </NavLink>
                </div>
                <nav className={styles.navList}>
                    <ul className={styles.navUl}>
                        {NAV_ITEMS.map((item) => (
                        <li key={item.label} className={styles.navItem}>
                            <Link to={item.to} className={styles.navLink}>{item.label}</Link>
                        </li>
                    ))}
                    </ul>
                </nav>
                <div className={styles.authButton}>
                    <Link to={ROUTES.LOGIN} className={styles.authLink}>Войти</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;