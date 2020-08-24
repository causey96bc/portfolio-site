import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

//Components
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import AboutPage from './pages/AboutPage'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Brett Causey',
      headerLinks: [
        { title: 'home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: "Hard work always speaks for itself.",
        subTitle: "progress through projects",
        text: "See my progress below"
      },
      about: {
        title: "My journey so far.",
      },

      contact: {
        title: "Let's start a conversation.",
      }
    }
  }


  render() {
    return (<div>
      <Router>
        <Container className="p-0" fluid={true}>
          {/* <p>hello from bootstrap</p> */}
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Brett Causey</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={() => <Homepage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/contact' exact render={() => <Contactpage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>

    </div>)

  }
}

export default App;

