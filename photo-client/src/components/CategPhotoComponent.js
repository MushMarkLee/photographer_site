import React, {Component} from 'react';
import {adminApi, baseUrl} from "../shared/baseUrl";
import {Link} from "react-router-dom";


class CategoryPhotoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            photos: [],
            family: false,
            children: false,
            pregnant: false,
        }
        this.handleRenderPhotos = this.handleRenderPhotos.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleRus = this.handleRus.bind(this)
        this.handleFirstPhoto = this.handleFirstPhoto.bind(this)
    }

    componentDidMount() {
        this.handleRenderPhotos();
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


    handleCategory = (photoCategory) => {
        return (
            <React.Fragment>
                        {this.state.photos.filter(photo => photo.theme === photoCategory).map(filteredphoto => (
                            <div className='col-xs-12 col-sm-5 col-lg-5' id='photocols'>
                                <img className='photogenerator' src={baseUrl + filteredphoto.image}/>
                            </div>

                        ))}
            </React.Fragment>
        )
    }
    handleFirstPhoto = (category) => {

        let photodictionary = {
            'family': 'assets/images/mainphoto/family.jpg',
            'children': 'assets/images/mainphoto/children.jpg',
            'pregnancy': 'assets/images/mainphoto/pregnancy.jpg',
        }
        return photodictionary[category]
    }

    handleRus = (category) => {

        let classification = {
            'family': 'Семейная фотосессия',
            'children': 'Детская съемка',
            'pregnancy': 'Съемка беременности'
        }
        return classification[category]
    }

    render() {


        if (typeof (this.props.photoCategory) === 'undefined') {
            console.log("Category: " + this.props.photoCategory)
            let categories = this.state.photos.map(photo => photo.theme)

            let uniq_categories = [...new Set(categories)].sort().map(category => (
                <div className='col-xs-12 col-sm-4 align-items-center'>
                        <h1 className='photocategory'> {this.handleRus(category)}</h1>
                        <img src={this.handleFirstPhoto(category)} className='photomain' />
                        <Link to={`/photos/` + category}>
                            <button className='mybuttonphoto btn btn-secondary'> <b> Посмотреть </b> </button>
                        </Link>
                </div>
            ))
            return (
                <div className='container text-center' id='photocategcontainer'>
                    <div className='row align-items-center'>
                        {uniq_categories}
                    </div>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    <h1 className='nameofcat'>{this.handleRus(this.props.photoCategory)}</h1>
                    <div className='container-fluid' id='photocon'>
                        <div className='row align-items-center'>
                            {this.handleCategory(this.props.photoCategory)}
                        </div>
                    </div>



                </React.Fragment>
            )
        }

    }

}

export default CategoryPhotoComponent