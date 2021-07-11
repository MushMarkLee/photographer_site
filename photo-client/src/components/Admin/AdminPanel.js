import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";

class AdminPanel extends Component{

    render() {
        return(
            <Navbar dark expand="lg" className='mynav'>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/addphoto'>
                            <span> ДОБАВИТЬ ФОТО </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/my_photos'>
                            <span> МОИ ФОТОГРАФИИ </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/requests'>
                            <span> ЗАПРОСЫ </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/home'>
                            <span> НА ГЛАВНУЮ </span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
export default AdminPanel