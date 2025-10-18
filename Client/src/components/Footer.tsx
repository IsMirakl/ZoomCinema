import styles from "../styles/components/Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.sectionMain}>
                    <h3>Zoom Cinema</h3>
                </div>
                <div>
                    <h4>Контакты</h4>
                </div>
                <div>
                    <h4>Помощь</h4>
                </div>
                <div> 
                    <h4>О компании</h4>
                </div>
            </div>
        </footer>
    )    
}

export default Footer;