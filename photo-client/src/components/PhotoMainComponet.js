import React, {Component} from 'react';
import {adminApi, baseUrl} from "../shared/baseUrl";

import Header from "./Header";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import CategoryPhotoComponent from './CategPhotoComponent'

// class MyCarousel extends Component{
//     constructor() {
//         super();
//         this.state = {
//             isFetching: false,
//             photos: []
//         }
//         this.handleRenderPhotos= this.handleRenderPhotos.bind(this)
//
//     }
//
//     componentDidMount() {
//         this.handleRenderPhotos();
//
//     }
//     handleRenderPhotos = () => {
//
//         this.setState({...this.state, isFetching: true});
//         fetch(adminApi + 'photos')
//             .then(response => response.json())
//
//             .then(result => {
//                 this.setState({photos: result, isFetching: false})
//             })
//             .catch(e => {
//                 console.log(e);
//                 this.setState({...this.state, isFetching: false});
//             });
//
//     }
//
//
//     render() {
//         let showphoto = this.state.photos.map((photo) =>
//                 <Carousel.Item interval={800}>
//                     <img className='d-block w-100' id='photomain' src={baseUrl+ photo.image} />
//                 </Carousel.Item>
//         )
//         return(
//             <React.Fragment>
//                 <div className='container '>
//                     <div className='row'>
//                         <Carousel id='mycarousel'>
//                             {showphoto}
//                         </Carousel>
//                     </div>
//
//
//                 </div>
//
//
//             </React.Fragment>
//
//         )
//     }
// }

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

