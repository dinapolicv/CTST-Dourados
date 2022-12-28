import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Form, FormGroup, Label, Col, Row, Input, Button } from 'reactstrap';

export default function Formu() {
    return(
        <div className={styles.forms1}>
            <Form
                name="contact" 
                method="POST" 
                data-netlify="true"
                action="/?success=true"
            >
                <input type="hidden" name="form-name" value="contact"/>

                <FormGroup row>
                    <Label>
                    Nome 
                    </Label>
                    <Input
                        id="exampleText"
                        name="name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup row>
                    <Label>
                    Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        type="email"
                        required
                    />
                </FormGroup>
                <FormGroup row>
                    <Label>
                        Telefone
                    </Label>
                    <Input
                        id="exampleTel"
                        name="tel"
                        type="tel"
                        minlength="9"
                        maxlength="11"
                        required 
                    />
                </FormGroup>
                <FormGroup row>
                    <Label>
                    Mensagem 
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        className={styles.input}
                    />
                </FormGroup>
                <FormGroup row className={styles.bot}>
                    <div></div>
                    <Col>    
                        <Button
                            type='submit'
                            className={styles.bot1} 
                        >
                            Enviar
                        </Button> 
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
};