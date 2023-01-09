import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { Card, CardBody, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function Tex() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return(
        <div className={styles.mainx}>
            <Card className={styles.doc}>
                <CardBody>
                    <CardText>
                        <a onClick={toggle}>Documentos</a>
                    </CardText>
                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Documentos</ModalHeader>
                <ModalBody className={styles.mainx}>
                    <Card>
                        <CardBody>
                            <CardText>
                                <a>LTCAT</a>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardText>
                                <a>PGR</a>
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
