import Nav from 'react-bootstrap/Nav';
import { Icon } from '@iconify/react';
import "./sidebar.css"

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column sidebar">
      <Nav.Link href="https://github.com/VBamalie"><Icon icon="brandico:github-text" /></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/molly-von-behren-a1b939234/"><Icon icon="brandico:linkedin" /></Nav.Link>
      <Nav.Link href="mailto:vbamalie@gmail.com"><Icon icon="entypo-social:google" /></Nav.Link>
    </Nav>
  );
}

export default Sidebar;