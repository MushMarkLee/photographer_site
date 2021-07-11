import React, {Component} from 'react';
import {adminApi, baseUrl} from "../shared/baseUrl";

import Header from "./Header";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import CategoryPhotoComponent from './CategPhotoComponent'


export default class PhotoMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                 <Header />
                <CategoryPhotoComponent photoCategory={this.props.match.params.photo_category}/>
                 <Footer />
            </React.Fragment>

        );
    }
}

