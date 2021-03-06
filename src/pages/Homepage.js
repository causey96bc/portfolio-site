import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
function Homepage(props) {
    return (
        <div>
            <Hero
                title={props.title}
                subTitle={props.subTitle}
                text={props.text} />
            <Carousel>

            </Carousel>
        </div>
    )
}
export default Homepage