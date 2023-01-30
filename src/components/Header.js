// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import mainLogo from'./research.png';

// const Header = () => (
//   <header id="app-header">
//     <Navbar bg="dark" variant='dark'>
//       <Container>
//         <Navbar.Brand href="#/">
//           <img
//             src={mainLogo}
//             width="60"
//             height="60"
//             className="d-inline-block align-center"
//             alt="Book library logo"
//           />
//         </Navbar.Brand>
//         <Nav.Link href="#/">Home</Nav.Link>
//         <Nav.Link href="#suggestions">Suggestions</Nav.Link>
//       </Container>
      
//     </Navbar>
//   </header>
// )
// export default Header;

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainLogo from'./research.png';
import Container from 'react-bootstrap/Container';


const Navigationbar = () => {
  return (
    <header id="app-header">
      <Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='nav'>
          <Navbar.Brand href="#/">
            <img
              src={mainLogo}
              width="60"
              height="60"
              className="d-inline-block align-center"
              alt="Book library logo"
            />
          </Navbar.Brand>
          <Nav.Link eventKey="1" as={Link} to="/" className='link'>Home</Nav.Link>
          <Nav.Link eventKey="2" as={Link} to="/suggestions" className='link'>Suggestions</Nav.Link>
        </Navbar.Collapse> 
        </Container>
      </Navbar>
    </header>
  );
}
 
export default Navigationbar;