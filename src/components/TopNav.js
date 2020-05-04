import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import { Brand, Nav, Form, FormControl, Button, Col } from 'react-bootstrap'
import Logo from '../style/images/moto-logo.png'

class TopNav extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        this.setState({user: this.props.currentUser})
        console.log(this.state.user)
    }


    render() {
        return (
            <div>
                <Navbar variant="dark" className="top-nav">
                    <Navbar.Brand href="/"><img src={Logo} id="navbar-logo"></img></Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Cites" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                    </Nav>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                </Navbar>
            </div>
        )
    }
}
export default TopNav;