// import React, { Component } from 'react';
// import {
//     Card,
//     CardBody,
//     CardImg,
//     CardText,
//     CardTitle,
//     Breadcrumb,
//     BreadcrumbItem,
//     Button,
//     Modal, ModalHeader, ModalBody, Row, Label, Col
// } from "reactstrap";
//
//
//
// // old version
//
// import { Link } from "react-router-dom";
// import {Control, Errors, LocalForm} from "react-redux-form";
// import { Loading } from "./LoadingComponent";
// import { baseUrl } from "../shared/baseUrl";
// import { FadeTransform, Fade, Stagger } from 'react-animation-components';
//
// const required = (val)=> val && val.length
// const maxLength = (len) => (val) => !(val) || (val.length<=len)
// const minLength = (len) => (val) => (val) && (val.length>=len)
//
// class CommentForm extends Component{
//     constructor() {
//         super();
//         this.state = {
//             isModalComment: false
//         }
//         this.handleAddComment = this.handleAddComment.bind(this);
//         this.toggleComment = this.toggleComment.bind(this);
//     }
//
//     toggleComment(){
//         this.setState({
//             isModalComment: !this.state.isModalComment
//         });
//     }
//
//     handleAddComment(values){
//         this.toggleComment();
//         this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
//     };
//
//
//     render() {
//         return(
//             <React.Fragment>
//                 <Button outline onClick={this.toggleComment}>
//                     <span className="fa fa-pencil"></span> Submit comment
//                 </Button>
//                 <Modal isOpen={this.state.isModalComment} toggle={this.toggleComment} className='commentform'>
//                     <ModalHeader toggle={this.toggleComment}>Submit comment</ModalHeader>
//                     <ModalBody>
//                         <LocalForm onSubmit={(values)=>this.handleAddComment(values)}>
//                             <Row className="form-group">
//                                 <Label htmlFor="customerphoto" md={12}>Rating</Label>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="rating" md={12}>Rating</Label>
//                                 <Col md={12}>
//                                     <Control.select model=".rating" id='rating' name='rating'  className="form-control">
//                                         <option>1</option>
//                                         <option>2</option>
//                                         <option>3</option>
//                                         <option>4</option>
//                                         <option>5</option>
//                                     </Control.select>
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="author" md={12}>Your name</Label>
//                                 <Col md={12}>
//                                     <Control.text model=".author" id='author' name='author'  className="form-control"
//                                                   placeholder="Your name"
//                                                   validators={{
//                                                       required, minLength: minLength(3), maxLength: maxLength(15)
//                                                   }} />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".author"
//                                         show="touched"
//                                         messages = {{
//                                             required: "Required",
//                                             minLength: "Must be grater than 2 characters",
//                                             maxLength: "Must be 15 characters or less"
//                                         }} />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="comment" md={12}>Comment</Label>
//                                 <Col md={12}>
//                                     <Control.textarea model=".comment" id='comment' name='comment'  className="form-control"
//                                                       placeholder="This is a comment" rows='6'/>
//                                 </Col>
//                             </Row>
//                             <Button type="submit" value="submit" color="primary">Submit</Button>
//                         </LocalForm>
//                     </ModalBody>
//                 </Modal>
//             </React.Fragment>
//         )
//     }
// }
//
// function RenderComments({comments,postComment}) {
//     let options = { year: 'numeric', month: 'short', day: 'numeric' };
//     const pickComments = comments.map((comment)=>{
//         return(
//             <Fade in>
//                 <li key={comment.id}>
//                     <img src={baseUrl + comment.customerphoto} id="customerphoto" />
//                     <p>{comment.rating}/5</p>
//                     <p>{comment.comment}</p>
//                     <p>--{comment.author} {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(Date.parse(comment.date)))}</p>
//                 </li>
//             </Fade>
//         )
//     })
//     if (comments != null){
//
//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <h4 style={{paddingLeft:"40px"}}>Comments</h4>
//                 <CommentForm postComment={postComment}/>
//                 <p></p>
//                 <ul className='list-unstyled'>
//                     <Stagger in>
//                         {pickComments}
//                     </Stagger>
//                 </ul>
//             </div>
//         );
//     }else{
//         return (
//             <div></div>
//         );
//     }
// }
// const Comments = (props) => {
//     if(props.comments.isLoading){
//         return (
//             <div className="container">
//                 <div className="row">
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.comments.errMess) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <h4>{props.errMess}</h4>
//                 </div>
//             </div>
//         );
//     }
//     else if(props.comments !=null ) {
//         return(
//             <div className='container'>
//                 <div className='row'>
//                     <RenderComments comments={props.comments.comments} postComment={props.postComment}  />
//                 </div>
//             </div>
//         )
//     }
//      else {
//          return (
//              <div></div>
//          )
//     }
// }
// export default Comments