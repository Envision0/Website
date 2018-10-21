import * as React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavMenu extends React.Component {
    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <img className="logo" src="./images/EnvisionLogo.gif" alt="Envision" />
                    <Navbar.Brand>
                        <Link to={'/'}>Envision</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' /> Mission
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/location'}>
                            <NavItem>
                                <Glyphicon glyph='question-sign' /> Where is Envision
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/conditions'}>
                            <NavItem>
                                <Glyphicon glyph='picture' /> Current Mars Conditions
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/interactive_model'}>
                            <NavItem>
                                <Glyphicon glyph='education' /> Interactive Model
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/data'}>
                            <NavItem>
                                <Glyphicon glyph='inbox' /> Data
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
