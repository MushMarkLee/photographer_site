import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


function Prices() {
    return(
        <React.Fragment>
            <Header />
            <div className='container'>
                <div className="row no-gutters align-items-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                        <h5 id='pricesheader'> Услуги </h5>
                    </div>
                    <div className='col-xs-12 col-sm-4' id='pricescard'>
                        <div className="card1">
                            <div className="cbody">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-xs-12 col-sm-12">
                                        <h3 className='card-header'> Лайт </h3>
                                        <div className='card-text'>
                                            <ul className="list-group">
                                                <li className="list-group-item">Съёмка на открытом воздухе или в студии
                                                    Москвы в течение 1 часа
                                                </li>
                                                <li className="list-group-item">Предварительная консультация и помощь в
                                                    выборе локации и образа
                                                </li>
                                                <li className="list-group-item">10 лучших фото в ретуши</li>
                                                <li className="list-group-item">30-50 фото в цветокоррекции</li>
                                                <li className="list-group-item">Передача фото через файлообменник</li>
                                                <li className="list-group-item">Срок выполнения 2-3 недели, в
                                                    зависимости от занятости
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="card-footer">
                                            <h4 className='price'> 8000 рублей</h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-4' id='pricescard2'>
                        <div className="card1">
                            <div className="cbody">
                                <div className="row align-items-center">
                                    <div className="col-xs-12 col-sm-12">
                                        <h3 className='card-header'> Фаворит </h3>
                                        <div className='card-text'>
                                            <ul className="list-group">
                                                <li className="list-group-item">Съёмка на открытом воздухе или в студии Москвы в течение 2 часов</li>
                                                <li className="list-group-item">Предварительная консультация и помощь в выборе локаций и образов</li>
                                                <li className="list-group-item">15 фото в ретуши</li>
                                                <li className="list-group-item">60-80 фото в цветокоррекции</li>
                                                <li className="list-group-item">Печать 10 лучших работ в фотолаборатории в формате 15*21</li>
                                                <li className="list-group-item">Пакет идеален для тех, кто хочет получить больше фотографий со сменой 2-3 образов</li>
                                                <li className="list-group-item">Передача фото через файлообменник</li>
                                                <li className="list-group-item">Срок выполнения 2-3 недели, в зависимости от занятости</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer">
                                            <h4 className='price'>  12000 рублей  </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-4' id='pricescard3'>
                        <div className="card1">
                            <div className="cbody">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-xs-12 col-sm-12">
                                        <h3 className='card-header'> Премиум </h3>
                                        <div className='card-text'>
                                            <ul className="list-group">
                                                <li className="list-group-item">Съёмка на открытом воздухе или в студии Москвы до 3 часов</li>
                                                <li className="list-group-item">Предварительная консультация и помощь в выборе локации и образа</li>
                                                <li className="list-group-item">Создание образа профессиональным стилистом</li>
                                                <li className="list-group-item">25 фото в ретуши</li>
                                                <li className="list-group-item">Все удачные фото в цветокоррекции</li>
                                                <li className="list-group-item">Печать фотокниги 20*20, 10 разворотов, фотообложка</li>
                                                <li className="list-group-item">Идеально подойдёт для съёмки праздника дня рождения</li>
                                                <li className="list-group-item">Передача фото через файлообменник</li>
                                                <li className="list-group-item">Срок выполнения 2-3 недели, в зависимости от занятости</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer">
                                            <h4 className='price'>  23000 рублей </h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </React.Fragment>

    )
}
export default Prices