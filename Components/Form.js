import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

export default function Formu() {
    return(
        <div>
            <Form
                name="contact" 
                method="POST" 
                data-netlify="true"
            >
                <FormGroup row>
                    <Label
                    for="exampleEmail"
                    sm={2}
                    >
                    Email
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="exemplo@exemplo.com"
                        type="email"
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleText"
                    sm={2}
                    >
                    Text Area
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                    sm={{
                        offset: 2,
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