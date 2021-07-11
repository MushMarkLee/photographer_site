import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {adminApi, globalVars} from "../../shared/baseUrl";

import PhotoRender from "./PhotosAdmin";

class Admin extends Component{
    constructor(props) {
        super(props);
        this.state={
            redirect: false,
            errors: false
        }
        this.handleLoginAdmin= this.handleLoginAdmin.bind(this);
    }

    handleLoginAdmin(event){
        event.preventDefault();
        let login = {
            user: this.username.value,
            pass: this.password.value
        }

        console.log(login)
        let log = JSON.stringify(login)


        fetch(adminApi + 'login', {
            method: 'POST',
            body: log,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            if (response.ok){
                return response.json()
            }
            else{
                throw new Error('error')
            }
        })
        .then( (responseData) => {
            console.log(globalVars.token)
            globalVars.token = responseData.token
            this.setState({redirect:true})
         })
        .catch(error => {
            console.log(error);
            this.setState({errors: true})
        });

    }



    render() {
        const FormRen = (() => {
            return (

                <React.Fragment>
                    <div className='col-xs-5 col-sm-3 '>
                        <Form onSubmit={this.handleLoginAdmin}>
                            <FormGroup>
                                <Label htmlFor="user">Username</Label>
                                <Input type="text" id="user" name="user" innerRef={(input)=>this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="pass">Password</Label>
                                <Input type="password" id="pass" name="pass" innerRef={(input)=>this.password = input}/>
                            </FormGroup>
                            <div className='wrapper'>
                                <Button type="submit" value="submit" color='danger'>Login</Button>
                            </div>

                        </Form>
                    </div>
                </React.Fragment>

            )
        })

        if (this.state.redirect) {
            return <Redirect to='/my_photos' component={()=><PhotoRender token={this.state.token}/>} />;
        }
        else if(this.state.errors){
            return (
                <React.Fragment>
                    <div className='container'>
                        <div className='row justify-content-center' id='adminlogin'>
                            <div className='col-12' id='errlog'>
                                <h5>Wrong password or username. Please try again ❤ 🥺</h5>
                            </div>
                            <FormRen />
                        </div>

                    </div>

                </React.Fragment>
            )
        }

        else if (this.state.errors === false && this.state.redirect===false){
            return (
                <div className='container align-content-center justify-content-center'>
                    <div className='row justify-content-center' id='adminlogin'>
                        <FormRen />
                    </div>
                </div>

            )
        }
    }

}

export default Admin