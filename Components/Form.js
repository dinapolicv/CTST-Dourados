import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Form, FormGroup, Label, Col, Row, Input, Button } from 'reactstrap';

export default function Formu() {
    const [success, setSuccess] = useState(false);
    useEffect(() => {  
        if ( window.location.search.includes('success=true') ) 
            {    setSuccess(true);  }}, 
        []
    );
    return(
        <div className={styles.forms1}>
            <label><h3>Fale conosco</h3></label>
            {success && (  <p style={{ color: 'green'}}>Enviada com sucesso!</p>)}
            <div className={styles.forms2}>
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
        </div>
    );
};