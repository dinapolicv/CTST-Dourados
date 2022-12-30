import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function api() {
    return(
        <div>
            <a href="https://api.whatsapp.com/send?phone=5567999125450&text=Ol%C3%A1" className={styles.app}>
                <img src='whatsapp1.png' />
            </a>
        </div>
    )
}