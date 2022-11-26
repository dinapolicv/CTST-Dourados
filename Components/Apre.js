import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Slid from '../Components/Slid';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';

export default function Apre() {
    return(
        <div>
            <Row>
                <Col
                    className="bg-light border"
                    sm="4"
                    xs="6"
                >

                    <Card
                        color="secondary"
                        inverse
                        outline
                    >
                        <Slid/>
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col
                    className="bg-light border"
                    sm="4"
                    xs="6"
                >

                    <Card
                        color="secondary"
                        inverse
                        outline
                    >
                        <Slid/>
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col
                    className="bg-light border"
                    sm="4"
                    xs="6"
                >
                    
                    <Card
                        color="secondary"
                        inverse
                        outline
                    >
                        <Slid/>
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}