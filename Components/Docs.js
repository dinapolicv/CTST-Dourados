import styles from '../styles/Home.module.css';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function Docs() {
    return(
        <div>
            <div className={styles.mainx}>
                <div className={styles.doc}>
                    <Card>
                        <CardBody>
                            <CardText>
                                texto
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardText>
                                texto
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className={styles.doc}>
                
                </div>    
            </div>
        </div>
    )
}