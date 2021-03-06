import './header.css'
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Nav className="header justify-content-end" activeKey="https://docs.google.com/document/d/1Wz7BnK9oH0mYytNLV-xblVyXeuIiS6AGLOvxF5wKeXA/edit?usp=sharing">
            <Nav.Item>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#work" >Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Contact Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="resume" href = "https://docs.google.com/document/d/1Wz7BnK9oH0mYytNLV-xblVyXeuIiS6AGLOvxF5wKeXA/edit?usp=sharing">Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header