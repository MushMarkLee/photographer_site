import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-12">
                        <ul className="list-unstyled">
                            <li className='footerlist'><Link to="/home"  className='footerlink'>Главная </Link></li>
                            <li className='footerlist'><Link to="/about" className='footerlink'> Обо мне </Link></li>
                            <li className='footerlist'><Link to="/photos" className='footerlink'> Фотографии  </Link></li>
                            <li className='footerlist'><Link to="/prices" className='footerlink'> Услуги </Link></li>
                            <li className='footerlist'><Link to="/comments" className='footerlink'> Комментарии  </Link></li>
                            <li className='footerlist'><Link to="/contact" className='footerlink'> Контакты  </Link></li>
                            <li className='footerlist'><Link to="/makeorder" className='footerlink'> Оставить заявку  </Link></li>

                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <ul className="list-unstyled">
                            <li className='footerlist'> Москва </li>
                            <li className='footerlist'> <i className="fa fa-phone fa-lg" />+79252698206</li>
                            <li className='footerlist'> <i className="fa fa-envelope fa-lg" />  <a href="mailto:uyutovairisha@gmail.com" className='footerlink'>Написать на почту</a></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;