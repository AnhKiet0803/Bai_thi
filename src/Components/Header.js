import { Navbar, Nav, Container, Button } from "react-bootstrap";
import './Component.css';
function Header() {
    return (
        <>
        <Navbar bg="light" expand="lg" sticky="top" className=" nav shadow-sm">
            <Container>
                <Navbar.Brand href="/" className="logo">FPT Aptech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
                    <Nav.Link href="#booking">Booking</Nav.Link>
                    <Nav.Link href="#locations">Locations</Nav.Link>
                </Nav>
                <div>
                    <Button variant="warning" className="me-2">Sign In</Button>
                    <Button className="btn-signup">Sign Up</Button>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="header-banner">
            <img src="/img/banner.jpg"/>
        </div>
        </>
    );
}

export default Header;