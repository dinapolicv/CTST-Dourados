import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

export default function Formu() {
    useEffect(() => {  
            if ( window.location.search.includes('success=true') ) 
                {    setSuccess(true);  }
        }, 
        []
        
    );
    return(
        <div>
            <Form
                name="contact" 
                method="POST" 
                data-netlify="true"
                action="/?success=true"
            >
                <input type="hidden" name="form-name" value="contact"/>
                
                <FormGroup row>
                    <Label
                    sm={1}
                    >
                    Nome 
                    </Label>
                    <Input
                        id="exampleText"
                        name="name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup row>
                    <Label
                    sm={1}
                    >
                    Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="exemplo@exemplo.com"
                        type="email"
                    />
                </FormGroup>
                <FormGroup row>
                    <Label 
                    sm={1}
                    >
                        Number
                    </Label>
                    <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="(xx)xxxxx-xxxx"
                        type="number"
                    />
                </FormGroup>
                <FormGroup row>
                    <Label
                    sm={1}
                    >
                    Mensagem 
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        className={styles.input}
                    />
                </FormGroup>
                <FormGroup row>
                    <Col
                    sm={{
                        size: 10
                    }}
                    >
                        <Button
                            type='submit'
                        >
                            Submit
                        </Button>  
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
};