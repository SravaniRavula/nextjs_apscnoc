import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';


const navBar = () => {
    return ( 
      <div>
      <section className="container">
                    <div className="row">
                           <div className="col-6  p-2 text-left"> <a  href='https://noc.ap.nic.in/'><img src="/assets/logo1.png" alt="logo1" /></a> </div>
                           <div className="col-6  p-2 text-right"> <a  href='https://noc.ap.nic.in/'><img src="/assets/logo2.png" alt="logo1" /></a> </div>
                    </div>
      </section>
      <Navbar className={styles.navbar}  expand="md"  >
               <div className="container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav "  className={styles.navbarnav} >
                       <Nav className="nav-item mr-auto" >                       
                         <Nav.Link  className={styles.navlink} href="/home">Home</Nav.Link>                       
                          <Nav.Link className={styles.navlink} href="/awards">Awards</Nav.Link>
                          <Nav.Link className={styles.navlink} href="/services">Services</Nav.Link>
                          <Nav.Link className={styles.navlink} href="/infrastructure">Infrastructure</Nav.Link>
                          <Nav.Link className={styles.navlink} href="/directory">Directory</Nav.Link> 
                          <Nav.Link className={styles.navlink} href="/events">Events</Nav.Link>
                          <Nav.Link className={styles.navlink} href="/contactUs">Contact Us</Nav.Link> 
                          <Nav.Link className={styles.navlink} href="https://servicedesk.nic.in/">Helpdesk</Nav.Link>                          
                      </Nav>
                    </Navbar.Collapse>
                </div>
          </Navbar>  
        </div>
    );
}
 
export default navBar;