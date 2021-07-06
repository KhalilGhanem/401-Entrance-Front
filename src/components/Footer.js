import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
               
                <Navbar.Brand > &copy; cocktail App 2021</Navbar.Brand>
                

            </Navbar>
        );
    }
}

export default Footer;
