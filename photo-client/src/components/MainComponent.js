import React, {Component} from 'react';

import ContactRenderPage from "./ContactComponent";
import About from "./AboutusComponent.js";
import Home from "./HomeComponent";
import RenderPageComments from "./CommentRender";
import Admin from "./Admin/AdminComponent";
import RenderAddPhoto from "./Admin/AddPhotoComponent";
import PhotoMain from "./PhotoMainComponet";
import PhotoRender from "./Admin/PhotosAdmin";

import Prices from "./PricesComponent";


import {Redirect, Route, Switch, withRouter} from "react-router-dom";

import Request from "./RequestComponent";
import {adminApi, baseUrl} from "../shared/baseUrl";
import RequestRender from "./Admin/RequestAdmin";


class Main extends Component {
    constructor() {
        super();
        this.state = {
            isFetching: false,
            photos: [],
            orders: []
        }
        this.handleRenderPhotos = this.handleRenderPhotos.bind(this)
        this.handleRenderOrders = this.handleRenderOrders.bind(this)
    }

    //
    componentDidMount() {

        this.handleRenderPhotos();
        this.handleRenderOrders()


    }
    handleRenderPhotos = () => {
        this.setState({...this.state, isFetching: true});
        fetch(adminApi + 'photos')
            .then(response => response.json())
            .then(result => {
                this.setState({photos: result, isFetching: false})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });

    }
    handleRenderOrders = () => {

        fetch(baseUrl + 'orders')
            .then(response => response.json())
            .then(result => {
                this.setState({orders: result})
            })
            .catch(e => {
                console.log(e);
            });

    }

    render() {

        return(
            <div>
                <React.Fragment>
                    <Switch>

                        <Route  path='/contact' component={ContactRenderPage} />

                        <Route path='/prices' component={Prices} />
                        <Route path='/comments' component={RenderPageComments} />
                        <Route path='/home' component={() => <Home photos={this.state.photos}/>} />
                        <Route path='/admin' component={Admin} />
                        <Route path='/requests' component={() => <RequestRender orders = {this.state.orders}/>}/>

                        <Route path='/addphoto' component={RenderAddPhoto} />
                        <Route path='/makeorder' component={Request} />
                        <Route path='/my_photos' component={() => <PhotoRender photos={this.state.photos}/>} />


                        <Route path='/about' component={About} />

                        <Route path='/photos/:photo_category' component={PhotoMain} />
                        <Route path='/photos' component={PhotoMain} />
                        <Redirect to='/home' />
                    </Switch>
                </React.Fragment>

            </div>
        );
    }
}
export default withRouter(Main);