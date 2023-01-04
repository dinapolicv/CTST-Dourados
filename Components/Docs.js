import styles from '../styles/Home.module.css';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function Docs() {
    return(
        <div className={styles.mainx}>
            <Card className={styles.doc}>
                <CardBody>
                    <CardText>
                        texto
                    </CardText>
                </CardBody>
            </Card>
            
            <Card className={styles.doc}>
                <CardBody>
                    <CardText>
                        texto
                    </CardText>
                </CardBody>
            </Card> 
        </div>
    )
}