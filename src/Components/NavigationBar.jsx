import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar(){
    return(
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">My Car App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
                <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact-us">
                <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sign-in" >
                <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}