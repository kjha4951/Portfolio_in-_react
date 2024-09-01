import { Navbar, Container, Nav } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <Navbar sticky="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#certifications">Certifications</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
