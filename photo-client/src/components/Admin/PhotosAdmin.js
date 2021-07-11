import React, {Component} from 'react';
import {adminApi, baseUrl, globalVars} from "../../shared/baseUrl";
import AdminPanel from "./AdminPanel";
import {Redirect} from "react-router-dom";
import Admin from "./AdminComponent";
import {Button} from "reactstrap";


class PhotoRender extends Component{
    constructor(props) {
        super(props);
        this.state = {
            photos: props.photos,
            id: null
        }


        console.log(props.token);
        console.log(this.state.id)

    }


    handleDeletePhoto = (photo_id, photo_image) => {
        console.log("Photo id " + photo_id)
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${globalVars.token}`
            },
            body: JSON.stringify({ id: photo_id, name: photo_image})
        };

        fetch(adminApi + 'photos', requestOptions)
        .then(response => {
            console.log(response.json())
            if (response.ok) {
                const rest_photos = this.state.photos.filter(photo => photo.id !== photo_id)
                this.setState({photos: rest_photos})
            }

        })
        .catch(err => console.log(err))
    }

    render() {
        let showphoto = this.state.photos.map((photo) =>
            <div className='col-xs-10 col-sm-5 col-md-5'>
                <img src={baseUrl + photo.image} id='photoad' alt='photocollection'/>
                <h5> <b>Название:</b> {photo.description} </h5>
                <h6> <b>Тема: </b> {photo.theme} </h6>
                <Button color='info' onClick={e => this.handleDeletePhoto(photo.id, photo.image)}><h6>Удалить фотографию</h6></Button> <br/>
            </div>
        )

        if (globalVars.token){
            return (
                <React.Fragment>
                    <AdminPanel />
                    <div className='container' id='photosrendering'>
                        <div className='row'>
                            {showphoto}
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
export default PhotoRender
