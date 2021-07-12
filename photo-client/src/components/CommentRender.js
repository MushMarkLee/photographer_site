import React, {Component} from 'react';

import {baseUrl, pythonUrl } from "../shared/baseUrl";

import {Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";

class CommentRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            comments: []
        }

        this.handleStar = this.handleStar.bind(this)
        this.handleRenderComment= this.handleRenderComment.bind(this);
    }

    componentDidMount() {
        this.handleRenderComment();

    }

    handleRenderComment = () => {

        this.setState({...this.state, isFetching: true});
        fetch(baseUrl + 'comments')
            .then(response => response.json())

            .then(result => {
                this.setState({comments: result, isFetching: false})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });

    }
    handleStar = (number) => {

        let stars = {
            '1': '⭐',
            '2': '⭐⭐',
            '3': '⭐⭐⭐',
            '4': '⭐⭐⭐⭐',
            '5': '⭐⭐⭐⭐⭐'
        }
        return stars[number]
    }


    render() {
        let show = this.state.comments.map((comment) =>

                <div className='row' id='commentarii'>
                    <div className='col-xs-12 col-sm-2 col-md-2 justify-xs-center' >
                        <img src={baseUrl+ comment.image} id='avatar'/>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-8 justify-xs-center' id='commentbody'>
                        <p id='commentauthor'> {comment.author} </p>
                        <p id='commentstar'>{this.handleStar(comment.rating)}</p>
                        <p id='commenttext'> {comment.comment}</p>
                    </div>
                </div>


        )



        return (
            <React.Fragment>

                {show}

            </React.Fragment>
        )
    }
}

class CommentUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalComment: false,
            image: null,
            rating: null,
            author: null,
            comment: null,
            imagePreviewUrl: null,

        }
        this.toggleComment = this.toggleComment.bind(this);
        this._handleSubmit= this._handleSubmit.bind(this);
        this._handleImageChange= this._handleImageChange.bind(this);
        this._handleRatingChange= this._handleRatingChange.bind(this);
        this._handleAuthorChange= this._handleAuthorChange.bind(this);
        this._handleCommentChange= this._handleCommentChange.bind(this);


    }


    toggleComment () {
        this.setState({
            isModalComment: !this.state.isModalComment
        });
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.toggleComment();
        const formData = new FormData();
        formData.append("image", this.state.image);
        formData.append("comment", this.state.comment);
        formData.append("author", this.state.author);
        formData.append("rating", this.state.rating);

        fetch(baseUrl+ 'comments', {
            method: 'POST',
            body: formData
        })
        .then(response => console.log(response.json()));
        window.location.reload(false);

    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];


        reader.onloadend = () => {
            this.setState({
                isModalComment: this.state.isModalComment,
                image: file,
                imagePreviewUrl: reader.result,
            });
        }

        reader.readAsDataURL(file)
    }

    _handleRatingChange(e) {
        e.preventDefault();
        this.setState({rating : e.target.value})
    }

    _handleAuthorChange(e) {
        e.preventDefault();
        this.setState({author : e.target.value})
    }

    _handleCommentChange(e) {
        e.preventDefault();
        this.setState({comment : e.target.value})
    }


    render() {
        let imagePreviewUrl = this.state.imagePreviewUrl;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            imagePreview = (<div className="previewText">Пожалуйста выберете фотографию для превью</div>);
        }

        return(
            <React.Fragment>
                <Button outline onClick={this.toggleComment} className='mybutton2'>
                    <i className="fa fa-pencil">  </i>  Написать комментарий
                </Button>

                <Modal isOpen={this.state.isModalComment} toggle={this._handleSubmit} id='commentform'>
                    <ModalHeader toggle={this.toggleComment}>Добавить комментарий</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this._handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="image" md={12}>Ваше фото</Label>
                                <Col md={5}>
                                    <div className="imgPreview">
                                        {imagePreview}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <input className="fileInput"
                                           id="image"
                                           type="file"
                                           onChange={this._handleImageChange}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Оценка</Label>
                                <Col md={12}>
                                    <select id='rating' value={this.state.rating} onChange={this._handleRatingChange} >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Ваше имя</Label>
                                <Col md={12}>
                                    <input type='text' id='author' name='author'  className="form-control"
                                           placeholder="Ваше имя"
                                           value={this.state.author} onChange={(e) => this._handleAuthorChange(e)}

                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Комментарий</Label>
                                <Col md={12}>
                                    <textarea id='comment' name='comment' className="form-control"
                                           placeholder="Комментарий" rows='6'
                                           value={this.state.comment}
                                           onChange={(e) => this._handleCommentChange(e)}

                                    />
                                </Col>
                            </Row>
                            <button type="submit" className='mybutton3'>Загрузить комментарий</button>
                        </form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        )
    }
}

function RenderPageComments() {
    return(
        <React.Fragment>
            <Header />
            <div className='container' id='commentscontainer'>
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                        <h5 id='commentsheader'> Отзывы </h5>
                    </div>
                    <div className='col-xs-12 col-sm-12'>
                        <CommentRender />
                    </div>
                    <div className='col-xs-12 col-sm-12'>

                        <CommentUpload />
                    </div>

                 </div>

            </div>

            <Footer />

        </React.Fragment>

    )
}

export default RenderPageComments