import React from 'react';
import {  Link } from 'react-router';
import { Row , Col, Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


class MainPage extends React.Component {
   /* componentDidMount(){
        console.log(this.props.router);
        this.props.router.push('/SeparateVideo')
    }*/
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

/*MainPage.contextTypes = {
    router: React.PropTypes.object.isRequired
}*/

export default MainPage;