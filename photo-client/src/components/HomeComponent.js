import React, {Component} from 'react';
import Header from "./Header";

import {Link} from "react-router-dom";
import {Button, Jumbotron} from "reactstrap";
import Footer from "./Footer";
import {baseUrl} from "../shared/baseUrl";
import Carousel from 'react-bootstrap/Carousel'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            photos: props.photos,
            pregnant:false,
            family: false,
            children: false

        }
        this.handleCarousel = this.handleCarousel.bind(this)
        this.handleCategory = this.handleCategory.bind(this)

    }

    handleCategory = (photoCategory) => {
        return (
                this.state.photos.filter(photo => photo.theme === photoCategory).map(filteredphoto => (
                    <Carousel.Item interval={800}>
                        <img className='d-block w-100' src={baseUrl + filteredphoto.image}/>
                    </Carousel.Item>
                ))

        )
    }

    handleCarousel = () => {
        if (this.state.family) {
            console.log(this.state)
            return(
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='caroselrow'>
                            <Carousel className='mycarousel'>
                                {this.handleCategory('family') }
                            </Carousel>
                            <Link to={'/photos/family'}>
                                <Button className='mybuttoncar'>Посмотреть фотографии</Button>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        }
        else if (this.state.pregnant){
            console.log(this.state)
            return(
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='caroselrow'>
                            <Carousel className='mycarousel'>
                                {this.handleCategory('pregnancy') }
                            </Carousel>
                            <Link to={'/photos/pregnancy'}>
                                <Button className='mybuttoncar'>Посмотреть фотографии</Button>
                            </Link>
                        </div>

                    </div>
                    <hr />

                </div>

            )
        }
        else if (this.state.children){
            console.log(this.state)
            return(
                <div className='container-fluid'>
                    <div className='row' >
                        <div className='caroselrow'>
                            <Carousel className='mycarousel'>
                                {this.handleCategory('children') }
                            </Carousel>
                            <Link to={'/photos/children'}>
                                <Button className='mybuttoncar'>Посмотреть фотографии</Button>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>

            )
        }

        else{
            return(
                <div></div>
            )
        }
    }

    render() {
        let showphoto = this.state.photos.map((photo) =>
            <div className='col-xs-10 col-sm-5 col-md-5'>
                <img src={baseUrl + photo.image} id='photoad'/>
                <h5> <b>Название:</b> {photo.description} </h5>
                <h6> <b>Тема: </b> {photo.theme} </h6>
                <Button color='info' onClick={e => this.handleDeletePhoto(photo.id, photo.image)}><h6>Удалить фотографию</h6></Button> <br/>
            </div>
        )

        return(
            <React.Fragment>
                <Header />
                <Jumbotron>
                    <div className='container-fluid'>
                        <div className='row row-header'>
                            <div className='col-xs-12 col-sm-12'>

                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <div className='container-fluid'>
                    <div className='row' id='whatweoffer'>
                        <div className='col-xs-12 col-sm-12 text-center'>
                            <h5 id='uslugi'>Услуги</h5>
                        </div>

                        <div className='col-xs-12 col-sm-3 ' id='commentcols'>
                            <div className="card border-left-primary shadow h-80 py-1" onClick={()=>this.setState({pregnant: true, family:false, children: false})}>
                                <div className="card-body">
                                    <h3 className='usltext'>Съемка беременности</h3>

                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-3' id='commentcols2'>
                            <div className="card border-left-primary shadow h-80 py-1" onClick={()=>this.setState({family: true, pregnant:false, children:false})}>
                                <div className="card-body">
                                    <h3 className='usltext'> Семейная съемка</h3>

                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-3' id='commentcols3'>
                            <div className="card border-left-primary shadow h-80 py-1" onClick={()=>this.setState({children: true, pregnant:false, family:false})}>
                                <div className="card-body">
                                    <h3 className='usltext'> Детская фотосессия </h3>


                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 text-center'>
                            {this.handleCarousel()}
                        </div>
                        <br />
                        <div className='col-xs-12 col-sm-12 text-center'>
                            <Link to="/prices">
                                <Button className='mybutton'>

                                    <b>Подробнее об услугах </b>
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className='container-fluid'>
                    <div className='row' id='row_about'>
                        <div className='col-xs-12 col-sm-5 offset-xs-2' id='left_side'>
                            <div className='my_card-text'>
                                <div className='text' id='irinatext'>
                                    <h5 id='hi'>Приветствую</h5>
                                    <p>Меня зовут Ирина. Я фотограф, занимающийся семейной съемкой.</p>

                                    <p>Семейная фотография, как связь времён - прошлого, настоящего и будущего.
                                        Именно в семейной фотографии я вижу особую ценность, ведь это не просто ещё одна фотка на память.
                                        Это эмоции, настроение, чувства, бережно сохранённые для себя и детей. И я с радостью помогу вам сохранить их!</p>

                                    <Link to="/about">
                                        <Button className='mybutton1'>
                                            <b>Подробнее обо мне </b>
                                        </Button>
                                    </Link>
                                </div>


                            </div>
                        </div>

                        <div className='col-xs-12 col-sm-6' id='right_side' >
                            <div className='card-img'>
                                <img alt='ira' src={'assets/images/ira3.jpg'} id='ira' />
                            </div>
                            <div>
                                <img alt='ira' src={'assets/images/6.jpg'} id='ira2' />
                            </div>
                        </div>

                    </div>

                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <p className='newrow'></p>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }

}

export default Home