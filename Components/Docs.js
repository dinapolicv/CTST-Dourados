import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { Card, CardBody, CardText} from 'reactstrap';
import Tex from '../Components/Tex1';
import Tex1 from '../Components/Tex2';

export default function Docs() {
    return(
        <div className={styles.mainx}>
            <Tex/>
            <Tex1/>
        </div>
    )
}