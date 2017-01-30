import React from 'react';
import {  Link } from 'react-router'
import { Row , Col, Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


class MainPage extends React.Component {
    render(){
        return(
            <div className="container headerContainer" >
            <Row>
                <Nav pills>
                    <NavItem>
                        <Link to="/"> <NavLink active>TopVideos</NavLink> </Link>
                    </NavItem>
                     <NavItem>
                            <Link to="/SeparateVideo"><NavLink >SingleVideo</NavLink></Link>
                     </NavItem>
                     <NavItem>
                            <Link to="/Favorites"> <NavLink>Favorites</NavLink> </Link>
                     </NavItem>
                </Nav>

                {this.props.children}
            </Row>
            </div>

        )
    }
}

export default MainPage;