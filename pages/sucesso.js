import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Form } from 'reactstrap';

export default function Suc() {
    return(
        <div>
            <Form
                name="contact"
                action="/pages/success"
                method="POST"
                data-netlify="true"
            >   
            </Form>
        </div>
    );
};