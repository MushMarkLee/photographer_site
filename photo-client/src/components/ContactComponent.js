import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";


// const required = (val)=> val && val.length
// const maxLength = (len) => (val) => !(val) || (val.length<=len)
// const minLength = (len) => (val) => (val) && (val.length>=len)
// const isNumber = (val) => !isNaN(Number(val))
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)



class Contact extends Component {
    constructor() {
        super();


    }

    render() {

        return(
            <div className="container">
                <div className="row align-items-center" id='contactsrow'>
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                        <h5 id='contactheader'>Контакты</h5>
                    </div>
                    <div className='col-xs-12 col-md-10 col-lg-10' >
                        <a className="button" href="https://wa.me/79252698206" >
                            <img src={'assets/images/whatsapp.svg'}  className='icon' />   Написать в WhatsApp</a>
                    </div>
                    <div className='col-xs-12 col-md-10 col-lg-10'>
                        <a className="button" href="https://t.me/Risha_02" >
                            <img src={'assets/images/telegram.svg'}  className='icon' />   Написать в Telegram</a>
                    </div>
                    <div className='col-xs-12 col-md-10 col-lg-10'>
                        <a className="button" href="https://vk.com/uyutovairina" >
                                <img src={'assets/images/vk.svg'} className='icon' />   Написать в VK </a>
                    </div>
                    <div className='col-xs-12 col-md-10 col-lg-10'>
                        <a className="button" href="https://instagram.com/flyrenn" >
                            <img src={'assets/images/instagram.svg'} className='icon' />   Я в instagram</a>
                    </div>
                </div>

            </div>
        );
    }
}
function ContactRenderPage() {
    return(
        <React.Fragment>
            <Header />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}
export default ContactRenderPage;
