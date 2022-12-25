import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

export default function Formu() {
    return(
        <div>
            <Form
                name="contact"
                action="/pages/success"
                method="POST"
                data-netlify="true"
            >
                <a href='/'>Retornar para o Site</a>
            </Form>
        </div>
    );
};