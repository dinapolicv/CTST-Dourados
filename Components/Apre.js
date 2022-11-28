import Image from 'next/image';
import style from '../styles/Home.module.css';
import Slid from '../Components/Slid';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';

export default function Apre() {
    return(
        <div className={style.maini}>
            <Row className={style.row}>
                <Col
                    className={style.ca}
                    sm="4"
                    xs="6"
                >

                    <Card
                        className={style.car}
                        color="secondary"
                        outline
                    >
                        <img src='demo1.png' className={style.casimg}/>
                        <CardBody>
                        <CardTitle className={style.font} tag="h5">
                            Objetivo
                        </CardTitle>
                        <CardText className={style.font1}>
                            É conscientizar as empresas para que possam melhorar seus colaboradores de campo nos aspectos técnico e prático, e entregar serviços com qualidade. 
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col
                    className={style.ca}
                    sm="4"
                    xs="6"
                >
                    <Card
                        className={style.car}
                        color="secondary"
                        outline
                    >
                        <img src='demo2.png' className={style.casimg}/>
                        <CardBody>
                        <CardTitle className={style.font} tag="h5">
                            Segurança
                        </CardTitle>
                        <CardText className={style.font1}>
                            Investir em segurança é investir no maior patrimônio da sua empresa: as pessoas. 
                            Pessoas pensam, criam, inovam, movimentam e dão vida a qualquer empresa.
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col
                    className={style.ca}
                    sm="4"
                    xs="6"
                >
                    
                    <Card
                        className={style.car}
                        color="secondary"
                        outline
                    >
                        <img src='demo4.png' className={style.casimg}/>
                        <CardBody>
                        <CardTitle className={style.font} tag="h5">
                            Diferencial
                        </CardTitle>
                        <CardText className={style.font1}>
                            Nossa empresa tem a execução dos treinamentos de segurança de 
                            forma simples e objetiva, com a disponibilidade de nos dirigirmos até a 
                            empresa.                    
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}