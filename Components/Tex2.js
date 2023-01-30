import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { Card, CardBody, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function Tex() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return(
        <div className={styles.mainx}>
            <Card className={styles.doc}>
                <CardBody className={styles.do}>
                    <CardText className={styles.do}>
                        <a onClick={toggle} className={styles.do}>Treinameto</a>
                    </CardText>
                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Treinameto</ModalHeader>
                <ModalBody className={styles.mainx}>
                    <Card>
                        <CardBody>
                            <CardText>
                                <a>Nr 10</a>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardText>
                                <a>Nr 11</a>
                            </CardText>
                        </CardBody>
                    </Card>
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Fechar
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
