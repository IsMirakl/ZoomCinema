import styles from "../styles/components/Footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.sectionMain}>
                    <h3>Zoom Cinema</h3>
                    <p>© 2025 Все права защищены.</p>
                </div>
                <div>
                    <h4>Контакты</h4>
                    <div className={styles.contactsLinks}>
                        <Link to="">zoomcinema@gmail.com</Link>
                        <Link to="">Телеграмм</Link>
                        <Link to="">ВКонтакте</Link>
                    </div>
                </div>
                <div>
                    <h4>Помощь</h4>
                    <div className={styles.helpLinks}>
                        <Link to="">Информация</Link>
                        <Link to="">Вопросы и ответы</Link>
                        <Link to="">Тех.поддержка</Link>
                    </div>
                </div>
                <div> 
                    <h4>О компании</h4>
                    <div className={styles.companyLinks}>
                        <Link to="">Документы</Link>
                        <Link to="">Пользовательское соглашение</Link>
                    </div>
                </div>
            </div>
        </footer>
    )    
}

export default Footer;