import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/Container'
function Content(props) {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}

                </Col>

            </Row>

        </Container>
    )

}
export default Content