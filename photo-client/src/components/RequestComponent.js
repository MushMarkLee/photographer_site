import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {baseUrl} from "../shared/baseUrl";

class Request extends Component{

    constructor(props) {
        super(props);
        this.state = {
            image:null,
            reference: null,
            referencetwo: null,
            referencethree: null,
            duration: null
        }
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleReferenceChange = this.handleReferenceChange.bind(this)
        this.handleReferenceTwoChange = this.handleReferenceTwoChange.bind(this)
        this.handleReferenceThreeChange = this.handleReferenceThreeChange.bind(this)
        this.handleDurationChange = this.handleDurationChange.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: file
            });
        }
        console.log(this.state)
        reader.readAsDataURL(file)
    }

    handleReferenceChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                reference: file
            });
        }
        console.log(this.state)
        reader.readAsDataURL(file)
    }
    handleReferenceTwoChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                referencetwo: file
            });
        }
        console.log(this.state)
        reader.readAsDataURL(file)
    }
    handleReferenceThreeChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                referencethree: file
            });
        }
        console.log(this.state)
        reader.readAsDataURL(file)
    }

    handleDurationChange(e) {
        e.preventDefault();
        this.setState({duration : e.target.value})
    }

    handleUpload(e) {
        e.preventDefault();

        const name = this.firstname.value
        const lastname = this.lastname.value
        const email =  this.email.value
        const link = this.link.value

        const theme = this.theme.value
        const date = this.date.value
        const time =  this.time.value
        const location = this.location.value


        const formData = new FormData();


        formData.append("name", name);
        formData.append("lastname", lastname)
        formData.append("email", email);
        formData.append("link", link);

        formData.append("theme", theme)
        formData.append("duration", this.state.duration);
        formData.append("date", date)
        formData.append("time", time);
        formData.append("location", location)
        formData.append("image", this.state.image);
        formData.append("reference", this.state.reference);
        formData.append("referencetwo", this.state.referencetwo);
        formData.append("referencethree", this.state.referencethree);

        fetch(baseUrl + 'orders', {
            method: 'POST',
            body: formData
        })
        .then((response) =>{
            if (response.ok){
                console.log(response.json())
                alert('Загружено!')
            }
            else{
                for (let pair of formData.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]);
                }

                console.log(typeof date)
                console.log(typeof time)
            }
        })
        .catch(err => console.log(err))

    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <div className='container' id='reqcont' >
                    <div className='row' id='orderinput'>
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <h5 id='requestheader'>Оставить заявку на фотосессию</h5>
                        </div>
                        <Form onSubmit={this.handleUpload} className='col-xs-12 col-md-12' >
                            <FormGroup className='requestinputs'>

                                <div className='col-xs-12 col-md-7 order-md-1'>
                                    <Label htmlFor="firstname" className='requestlabel'>Ваше имя </Label>
                                </div>

                                <div className='col-xs-12 col-md-8 order-md-3 '>
                                    <Input type='text' id="firstname" name="firstname" className="form-control"
                                           placeholder="Ваше имя" innerRef={(input)=>this.firstname = input}/>
                                </div>

                                <div className='col-xs-12 col-md-6 order-md-2 '>
                                    <Label htmlFor="lastname" className='requestlabel'>Фамилия</Label>
                                </div>

                                <div className='col-xs-12 col-md-8 order-md-4 '>
                                    <Input type='text' id='lastname' name='lastname'  className="form-control"
                                           placeholder="Фамилия" innerRef={(input)=>this.lastname = input}/>
                                </div>
                            </FormGroup>
                             <FormGroup className='requestinputs'>
                                 <div className='col-xs-12 col-md-7 order-md-1'>
                                     <Label htmlFor="email" className='requestlabel'>E-mail  </Label>
                                 </div>
                                 <div className='col-xs-12 col-md-8 order-md-3 '>
                                     <Input type='text' id='email' name='email'  className="form-control"
                                            placeholder="E-mail" innerRef={(input)=>this.email = input}/>
                                 </div>
                                 <div className='col-xs-12 col-md-6 order-md-2'>
                                     <Label htmlFor="linktwo" className='requestlabel'>Ссылки на социальную сеть</Label>
                                 </div>
                                 <div className='col-xs-12 col-md-8 order-md-4'>
                                     <Input type='text' id='link' name='link'  className="form-control"
                                            placeholder="Ссылка на соцсеть" innerRef={(input)=>this.link = input}/>
                                 </div>
                                 <br/>


                             </FormGroup>

                            <FormGroup className='requestinputs'>
                                <div className='col-xs-12 col-md-6 order-md-1'>
                                    <Label htmlFor="theme" className='requestlabel'> Тема фотосессии</Label>
                                </div>
                                <div className='col-xs-12 col-md-8 order-md-3 '>
                                    <Input type='text' id='theme' name='theme'  className="form-control"
                                           placeholder="Тема фотосесии" innerRef={(input)=>this.theme = input}/>
                                </div>
                                <br/>
                                <div className='col-xs-12 col-md-6 order-md-2'>
                                    <Label htmlFor="duration" className='requestlabel'> Длительность фотосессии</Label>
                                </div>
                                <div className='col-xs-12 col-md-8 order-md-4 '>
                                    <select id='duration' value={this.state.duration} onChange={this.handleDurationChange}>
                                        <option>1 час</option>
                                        <option>2 часа</option>
                                        <option>3 часа</option>
                                        <option>3 + часов</option>
                                    </select>
                                </div>
                            </FormGroup >


                            <FormGroup className='requestinputs'>
                                <div className='col-xs-12 col-md-4 order-md-1'>
                                    <Label htmlFor="date" className='requestlabel'>Дата</Label>
                                </div>
                                <div className='col-xs-12 col-md-6 order-md-3'>
                                    <Input type='date' id='date' name='date'  className="form-control"
                                           placeholder="Дата" innerRef={(input)=>this.date = input}/>
                                </div>
                                <div className='col-xs-12 col-md-5 order-md-2'>
                                    <Label htmlFor="time" className='requestlabel'>Время</Label>
                                </div>
                                <div className='col-xs-12 col-md-6 order-md-4 '>
                                    <Input type='time' id='time' name='time'  className="form-control"
                                           placeholder="Время" innerRef={(input)=>this.time = input}/>
                                </div>
                            </FormGroup>

                            <FormGroup className='requestinputs'>
                                <div className='col-xs-12 col-md-6 order-md-1 '>
                                    <Label htmlFor="location" className='requestlabel'>Место</Label>
                                </div>

                                <div className='col-xs-12 col-md-8 order-md-2 '>
                                    <Input type='text' id='location' name='location'  className="form-control"
                                           placeholder="Место" innerRef={(input)=>this.location= input}/>
                                </div>
                                <br />
                            </FormGroup>
                            <FormGroup className='requestinputs'>
                                <div className='col-xs-12 col-md-6 order-md-1'>
                                    <Label htmlFor="image" className='requestlabel' > Ваша фотография</Label>
                                </div>

                                <div className='col-xs-12 col-md-6 order-md-5 '>
                                    <Input className="fileinput"
                                           id="image"
                                           type="file"
                                           onChange={this.handleImageChange}/>
                                </div>
                                <br />
                                <div className='col-xs-12 col-md-10 order-md-5 '>
                                    <Label htmlFor="reference" className='requestlabel' >Референсы фотографий для фотосессии </Label>
                                </div>

                                <div className='col-xs-12 col-md-6 order-md-4 '>
                                    <Input className="fileinput"
                                           id="reference"
                                           type="file"
                                           onChange={this.handleReferenceChange}/>
                                </div>

                                <div className='col-xs-12 col-md-6 order-md-4 '>
                                    <Input className="fileinput"
                                           id="referencetwo"
                                           type="file"
                                           onChange={this.handleReferenceTwoChange}/>
                                </div>
                                <div className='col-xs-12 col-md-6 order-md-4 '>
                                    <Input className="fileinput"
                                           id="referencethree"
                                           type="file"
                                           onChange={this.handleReferenceThreeChange}/>
                                </div>

                            </FormGroup>
                            <div className='col-xs-12 col-md-6 order-md-4'>
                                <Button type="submit" value="submit" className='mybutton4'>Отправить</Button>
                            </div>

                        </Form>

                    </div>
                </div>
                <Footer />
            </React.Fragment>

        )
    }
}

export default Request