import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { Card, CardBody, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function Docs() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return(
        <div className={styles.mainx}>
            <Card className={styles.doc}>
                <CardBody>
                    <CardText>
                        <a onClick={toggle}>texto1</a>
                    </CardText>
                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Fechar
                </Button>
                </ModalFooter>
            </Modal>

            <Card className={styles.doc}>
                <CardBody>
                    <CardText>
                        <a onClick={togglee}>texto2</a>
                    </CardText>
                </CardBody>
            </Card>

            <Card className={styles.doc}>
                <CardBody>
                    <CardText>
                        texto3
                    </CardText>
                </CardBody>
            </Card>

            <Card className={styles.doc}>
                <CardBody>
                    <CardText>
                        texto4
                    </CardText>
                </CardBody>
            </Card> 
        </div>
    )
}