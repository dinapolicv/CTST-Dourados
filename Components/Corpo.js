import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Apre from '../Components/Apre';
import Formu from '../Components/Form';
import Docs from '../Components/Docs';

export default function Corpo() {
    return(
        <div className={styles.corpo}>
            <Apre/>
            <div className={styles.main}>
                <Docs/>
            </div>
            <div className={styles.conta}>
                <Formu/>
            </div>
        </div>
    )
}