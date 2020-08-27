import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
function Hero(props) {
    console.log(props.subTitle)
    console.log(props)
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 bg-image">
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h4 className="display-4 font-weight-light">{props.subTitle}</h4>}
                        {props.text && <h4 className="lead font-weight-light">{props.text}</h4>}
                    </Col>
                </Row>
            </Container>


        </Jumbotron>
    )
}
export default Hero