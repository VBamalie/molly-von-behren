import Nav from 'react-bootstrap/Nav';
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="https://github.com/VBamalie"><Icon icon="brandico:github-text" /></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/molly-von-behren-a1b939234/"><Icon icon="brandico:linkedin" /></Nav.Link>
    </Nav>
  );
}

export default Sidebar;