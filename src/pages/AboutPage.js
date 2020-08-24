import React from 'react'
import Container from 'react-bootstrap/Container'
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {
    console.log('about page props..', props)
    return (
        <div>
            <Hero title={props.title} />
            <Container>
                <Content>
                     Hi my name is Brett Causey. I was born and raised in Jacksonville, Fl.
                I currently work as a safety supervisor at a local construction company, but previous to that I was employed as a correctional officer for three years with the state of Florida.
                I’ m looking to change career fields due to the fact that I’ve been interested in the web development industry ever since I was young boy.
                I have been self teaching myself programming for over a year at this point including being enrolled in a coding bootcamp at the University of North Florida.
                   
                   
                     Because of my skills from previous employment I have been able to transition seamlessly into the programming world.
                 My work experience has cultivated very efficient problem solving skills
                 due to the high stress situations i have been placed in from a young age.
                 I have also found this easier due to my attention to detail and my hard-working mindset. 
                 I hope to find a good company that will allow me to show my technical know how and my dedication to improving their software. 
                 I also hope to find a close knit environment where I potentially work because I believe that comradery makes solving life’s biggest problems much easier.
                </Content>
            </Container>
        </div>
    )
}
export default AboutPage