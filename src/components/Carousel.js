import React from 'react'
// import Github from '../assets/images/Github.png'
import linkedin from '../assets/images/linkedIn.png'
import index from '../assets/images/index.jpg'
import Github1 from '../assets/images/Github1.webp'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'

import Card from '../components/Card'
class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'My FullStack academy Projects',
                    subTitle: 'developer in progress projects',
                    imgSrc: Github1,
                    link: 'https://github.com/causey96bc',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Brett Causey',
                    subTitle: 'Aspiring Developer, check out my LinkedIn',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/brett-causey-1a630a1b3/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'My capstone project',
                    subTitle: 'coming soon',
                    imgSrc: index,
                    selected: false
                },
            ]
        }
    }
    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }



    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel