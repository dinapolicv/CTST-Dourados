import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function api() {
    return(
        <div>
            <a href="https://web.whatsapp.com/send?phone=5567999840281&text=Olá! Estou entrando em contato através do site. Você poderia me ajudar?" className={styles.app}>
                <img src='whatsapp1.png' />
            </a>
        </div>
    )
}