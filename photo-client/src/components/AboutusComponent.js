import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";


class About extends Component {
    render(){

        return(
            <React.Fragment>
                <Header />
                <div className='container' id='aboutcontainer'>
                    <div className='row'>

                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <h5 id='aboutheader'>Обо мне</h5>
                        </div>

                        <div className='col-xs-12 col-sm-6 col-md-6'>
                            <div id='square'>

                            </div>
                            <div id='square2'>

                            </div>
                            <div>
                                <img alt='ira' src={'assets/images/5supermin.jpg'} id='iraabout' />
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='text' id='aboutme'>

                                <p className='text-sm-center'>Меня зовут Ирина, я детский и семейный фотограф.</p>
                                <p>Моя любовь к фотографии началась в 14 лет, когда мама подарила мне профессиональную фотосессию.
                                    После этой съёмки мне захотелось оказаться с другой стороны объектива и самой творить!</p>
                                <p>Около 3 лет назад я пришла в детскую и семейную фотографию и поняла, что это оно, то самое!
                                    В этом виде съёмок я вижу особую ценность.</p>

                                <p>Организую и проведу для вас детскую, семейную фотосессию, съёмку беременности или женского портрета.
                                    С радостью помогу запечатлеть ваши эмоции и любовь на снимках. Легко нахожу подход к любому человеку, к детям.
                                    Со мной съёмка проходит весело и интересно.
                                    Если вы любите яркие и одновременно нежные фотографии, то нам с вами по пути!</p>
                            </div>
                        </div>


                    </div>
                </div>
                <Footer />


            </React.Fragment>
        )
    }

}

export default About




