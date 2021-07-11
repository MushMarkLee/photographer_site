import React, {Component} from 'react';
import {
    Button,
    Collapse,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();
        alert('Username: '+ this.username.value + " Password: " + this.password.value+ " Remember: " + this.remember.checked)
        console.log(this.password)
        console.log(this.password.value)
        event.preventDefault();
    }

    render() {
        const isActive = {
            fontWeight: "bold", color: "red"
        }

         return(
             <React.Fragment>
                 <Navbar dark expand="lg" className='mynav'>
                     <div className='container-fluid'>
                         <NavbarToggler onClick={this.toggleNav} />
                         <Collapse isOpen={this.state.isNavOpen} navbar>
                             <Nav navbar >
                                 <NavItem>
                                     <NavLink className='nav-link' to='/home' >
                                         <span className='navigation'> Главная </span>
                                     </NavLink>
                                 </NavItem>
                                 <NavItem>
                                     <NavLink className='nav-link' to='/about' >
                                         <span className='navigation'> Обо мне </span>
                                     </NavLink>
                                 </NavItem>
                                 <NavItem>
                                     <NavLink className='nav-link' to='/photos' >
                                         <span className='navigation'> Фотографии </span>
                                     </NavLink>
                                 </NavItem>
                                 <NavItem>
                                     <NavLink className='nav-link ' to='/prices'>
                                         <span className='navigation'> Услуги </span>
                                     </NavLink>
                                 </NavItem>
                                 <NavItem>
                                     <NavLink className='nav-link ' to='/comments' >
                                         <span className='navigation'> Отзывы </span>
                                     </NavLink>
                                 </NavItem>
                                 <NavItem>
                                     <NavLink className='nav-link ' to='/contact' >
                                         <span className='navigation'> Контакты </span>
                                     </NavLink>
                                 </NavItem>

                                 <NavItem>
                                     <NavLink className='nav-link' to='/makeorder' id='makeorder'>
                                         <span className='navigation'> Оставить заявку  </span>
                                     </NavLink>
                                 </NavItem>
                             </Nav>
                             {/*<Nav className="ml-auto" >*/}
                             {/*    <NavItem >*/}
                             {/*        <Button outline onClick={this.toggleModal}>*/}
                             {/*            <span className="fa fa-sign-in fa-lg" id='loginpart'/><span id='loginpart2'> Login</span>*/}
                             {/*        </Button>*/}
                             {/*    </NavItem>*/}
                             {/*</Nav>*/}
                         </Collapse>
                     </div>
                 </Navbar>

                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} id='loginform'>
                     <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                     <ModalBody>
                         <Form onSubmit={this.handleLogin} >
                             <FormGroup>
                                 <Label htmlFor="username">Username</Label>
                                 <Input type="text" id="username" name="username" innerRef={(input)=>this.username = input}/>
                             </FormGroup>
                             <FormGroup>
                                 <Label htmlFor="password">Password</Label>
                                 <Input type="password" id="password" name="password" innerRef={(input)=>this.password = input}/>
                             </FormGroup>
                             <FormGroup check>
                                 <Label check>
                                     <Input type="checkbox" name="remember" innerRef={(input)=>this.remember = input}/>
                                     Remember me
                                 </Label>
                             </FormGroup>
                             <Button type="submit" value="submit" color="primary">Login</Button>
                         </Form>
                     </ModalBody>
                 </Modal>
             </React.Fragment>
         );
        }
}

export default Header