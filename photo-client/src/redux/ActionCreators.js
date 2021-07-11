import * as ActionTypes from './ActionTypes';
import { baseUrl } from "../shared/baseUrl";
import { baseUrl2 } from "../shared/baseUrl";

export const fetchPhotos = () => (dispatch) => {

    dispatch(photosLoading(true));

    return fetch(baseUrl2 + 'photos')
        .then(response => {
                if(response.ok){
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': '+response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message)
                throw errmess;
            })
        .then(response => response.json())
        .then(photos => dispatch(addPhotos(photos)))
        .catch(error => dispatch(photosFailed(error.message)));
}

export const photosLoading = () => ({
    type: ActionTypes.PHOTOS_LOADING
});

export const photosFailed = (errmess) => ({
    type: ActionTypes.PHOTOS_FAILED,
    payload: errmess
});

export const addPhotos = (photos) => ({
    type: ActionTypes.ADD_PHOTOS,
    payload: photos
});



export const addComment = (comment) => ({
    type:ActionTypes.ADD_COMMENT,
    payload: comment
});
export const postComment = (customerphoto, rating, author, comment) => (dispatch) => {

    const newComment = {
        customerphoto: customerphoto,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
                if(response.ok){
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': '+response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message)
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {console.log('post comments', error.message);
            alert('Your comment could not be posted\nError: ' + error.message)})
}


// export const addNewComment = (image) => (dispatch) => {
//     const loadComment = {
//         image: image,
//
//     }
//     const commentData = new FormData();
//     commentData.append("image", loadComment.image);
//
//     return fetch(`http://127.0.0.1:5000/comments`, {
//         method: 'POST',
//         body: commentData,
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         },
//     })
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': '+response.statusText)
//             error.response = response;
//             throw error;
//         }
//         },
//         error => {
//         var errmess = new Error(error.message)
//             throw errmess;
//     })
//     .then(response => console.log(response.json()))
//     .then(response => dispatch(addComment(response)))
//     .catch(error => {console.log('post comments', error.message);
//             alert('Your comment could not be posted\nError: ' + error.message)})
//
// }




export const fetchComments = () => (dispatch) => {

    dispatch(photosLoading(true));

    return fetch(baseUrl + 'comments')
        .then(response => {
                if(response.ok){
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': '+response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message)
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addFeedback = (feedback) => ({
    type:ActionTypes.ADD_FEEDBACK,
    payload: feedback
});
export const postFeedback = (firstname, lastname, telnum, email, agree, contacttype, message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contacttype: contacttype,
        message: message
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl + 'feedback',{
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
                if(response.ok){
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': '+response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message)
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addFeedback(response)))
        .catch(error => {console.log('feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message)})
}

