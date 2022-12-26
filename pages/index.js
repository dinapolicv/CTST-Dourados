import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Navb from '../Components/Navb';
import Apre from '../Components/Apre';
import Api from '../Components/Api';
import Formu from '../Components/Form';

export default function Home() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {  
    if ( window.location.search.includes('success=true') ) 
        {    setSuccess(true);  }}, 
      []
    );
  return (
    <div className={styles.container}>
      <Head>
        <title>CTST-Dourados</title>
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
        <Apre/>
        <div className={styles.maini}>
          <p>body</p>
        </div>
        <div className={styles.conta}>
          <div>
            ctst10@hotmail.com
          </div>
          <div className={styles.forms}>
            <label><h3>Fale conosco</h3></label>
            {success && (  <p style={{ color: 'green'}}>Enviada com sucesso!</p>)}
            <Formu/>
          </div>
        </div>
      </main>
    </div>
  )
}