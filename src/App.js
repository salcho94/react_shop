import logo from './logo.svg';
import './App.css';
import {Nav, Navbar,NavDropdown,Container} from 'react-bootstrap';
import {useState} from 'react';
import data from './data';
import MainList  from './component/MainList';
function App() {

    let [shoes] = useState(data)

  return (
    <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">salcho</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className="main-bg"></div>
        <div className="container">
            <div className="row">
                <MainList shoes ={shoes}/>
            </div>
        </div>
    </div>
  );
}

export default App;
