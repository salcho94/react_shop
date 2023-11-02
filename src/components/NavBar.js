/*eslint-disable*/
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const NavBar = () => {
    let navigator = useNavigate();
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand onClick={() => {navigator('/')}} >salcho</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {navigator('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={() => {navigator('/detail')}}>detail</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar;