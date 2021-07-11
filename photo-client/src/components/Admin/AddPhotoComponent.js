import React, {Component} from "react";
import {adminApi, globalVars} from "../../shared/baseUrl";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import AdminPanel from "./AdminPanel";
import {Redirect} from "react-router-dom";
import Admin from "./AdminComponent";

class PhotoUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            imagePreviewUrl: null,

        }
        this.handleUpload = this.handleUpload.bind(this);

        this._handleImageChange= this._handleImageChange.bind(this);
    }


    handleUpload(e) {
        e.preventDefault();

        const description =  this.description.value
        const theme = this.theme.value

        console.log(description)
        console.log(theme)
        console.log(this.state.image)
        const formData = new FormData();
        formData.append("image", this.state.image);
        formData.append("description", description);
        formData.append("theme", theme)

        fetch(adminApi + 'photos', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${globalVars.token}`
            }
        })
        .then((response) =>{
            if (response.ok){
                console.log(response.json())
                for (let pair of formData.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]);
                }
                alert('Фотография загружена!')
                this.setState({image:null, imagePreviewUrl: null})
            }
        })


    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];


        reader.onloadend = () => {
            this.setState({
                image: file,
                imagePreviewUrl: reader.result,
            });
        }
        console.log(this.state)
        reader.readAsDataURL(file)
    }


    render() {
        let imagePreviewUrl = this.state.imagePreviewUrl;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            imagePreview = (<div className="previewText">Пожалуйста выберете фото для превью</div>);
        }

        if (globalVars.token){
            return (
                <React.Fragment>
                        <div className='container '>
                            <div className='row justify-content-center align-items-center'>
                                <Form onSubmit={this.handleUpload}>
                                    <FormGroup>
                                        <Label htmlFor="image" md={12}> </Label>
                                        <Col md={6}>
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
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="description">Описание</Label>
                                        <Input type="text" id="description" name="description" innerRef={(input)=>this.description = input}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="theme">Тема</Label>
                                        <Input type="text" id="theme" name="theme" innerRef={(input)=>this.theme = input}/>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Добавить</Button>

                                </Form>
                            </div>
                        </div>
                </React.Fragment>
            )
        }
        else{
            return <Redirect to='/admin' component={Admin}/>
        }

    }
}
function RenderAddPhoto() {
    return(
        <React.Fragment>
            <AdminPanel />
            <PhotoUpload />
        </React.Fragment>
    )
}

export default RenderAddPhoto