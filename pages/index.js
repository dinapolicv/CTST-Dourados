import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navb from '../Components/Navb';
import Api from '../Components/Api';
import Corpo from '../Components/Corpo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CTST-Ipiranga</title> 
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="icon.ico" />
      </Head>
      <Navb/>
      <div className={styles.slids}>
        <img src='bannerpc.png' className={styles.slidspc}/>
        <img src='bannercell.png' className={styles.slidscl}/>
      </div>
      <Api/>
      <main className={styles.main}>
        <Corpo/>
      </main>
      <footer className={styles.footer}>
        <div className={styles.ima}>
          <img className={styles.imgpc} src='logolt2.png'/>
          <img className={styles.imgcl} src='logopr.png'/>
        </div> 
        <div>
          <label><h5>Informações</h5></label>
        </div>
        <div>
          <label><h5>Atendimento</h5></label>
          <ul>
            <li><p> Rua Eykishi Sakaguti 344 <p> Bairro Altos do Indaia</p></p></li>
            <li><p>(67) 99912-5450</p></li>
            <li><p>(67) 99984-0281</p></li>
            <li><p>ctst10@hotmail.com</p></li>
          </ul> 
        </div>
        <div></div>
      </footer>
    </div>
  )
}