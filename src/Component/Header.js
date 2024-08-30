import React from 'react';
import {Nav,Navbar,NavDropdown,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import i18next from 'i18next';

const Header = () => {
    return(
        <>
        <Navbar className='header' expand="lg" style={{backgroundColor: "rgb(223, 199, 168)"}}>
            <Container>
               <LinkContainer to ='/' >
            <Navbar.Brand href="/">
            <Image  style={{width:"50px",height:"50px"}} src="image/logo.jpg" alt='vtu' roundedCircle />
            <h6  className='logo-text-style'>Visvervaya Technological Univercity,Belagavi</h6>
            </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">

               <LinkContainer to='/' > 
               <Nav.Link href="#">Home</Nav.Link>
               </LinkContainer>

              <LinkContainer to='/about'>
              <Nav.Link href="#">About Us</Nav.Link>
              </LinkContainer>
             

              <NavDropdown title="Academic" id="basic-nav-dropdown">
                <LinkContainer to='/admission'>
                  <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                </LinkContainer>
                 
                 <LinkContainer to='/circular'>
                 <NavDropdown.Item href="#">Circulars & Notification </NavDropdown.Item>
                 </LinkContainer>
                 
                 <NavDropdown.Item href="#">Certicitate Issued</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Examination" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                 <NavDropdown.Item href="#">Examination Application </NavDropdown.Item>  

                 <LinkContainer to = '/result/loginpage'>
                 <NavDropdown.Item href="#">Results</NavDropdown.Item>
                 </LinkContainer>
                 
               </NavDropdown>

              <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#">Electronic & Communication Engg</NavDropdown.Item>
                 <NavDropdown.Item href="#">Civil Engg </NavDropdown.Item>
                 <NavDropdown.Item href="#">Computer science Engg</NavDropdown.Item>
                 <NavDropdown.Item href="#">Information & Technology </NavDropdown.Item>
              </NavDropdown>

             

              <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            </Navbar.Collapse>
           
            </Container>
        </Navbar>
       

        </>
    )
}

export default Header