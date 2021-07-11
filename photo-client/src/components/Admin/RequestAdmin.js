import React, {Component} from 'react';
import {adminApi, baseUrl, globalVars} from "../../shared/baseUrl";
import {Button} from "reactstrap";
import AdminPanel from "./AdminPanel";
import {Redirect} from "react-router-dom";
import Admin from "./AdminComponent";


class RequestRender extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orders: props.orders
        }
    }

    render() {
        let showorder = this.state.orders.map((order) =>
            <React.Fragment>
                <h1 className='text-center'>Заказ номер: {order.id}</h1>
                <div className='col-xs-12 col-sm-12 col-md-12'>
                    <img src={baseUrl + order.image} id='clientphoto' alt='photocollection'/>
                </div>
                <div className='col-xs-12 col-sm-10 col-md-10' id='requestbody'>

                    <h4> <b>Имя:</b> {order.name} </h4>
                    <h4> <b>Фамилия: </b> {order.lastname} </h4>
                    <h4> <b>Почта: </b> {order.email} </h4>
                    <h4> <b>Ссылка: </b> {order.link} </h4>

                    <h4> <b>Тема фотосессии: </b> {order.theme} </h4>
                    <h4> <b>Длительность: </b> {order.duration} </h4>
                    <h4> <b>Дата: </b> {order.date} </h4>
                    <h4> <b>Время: </b> {order.time} </h4>
                    <h4> <b>Место: </b> {order.location} </h4>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-12'>
                    <h3> Референсы : </h3>
                    <img src={baseUrl + order.reference} className='photoref'/>
                    <img src={baseUrl + order.referencetwo} className='photoref'/>
                    <img src={baseUrl + order.referencethree} className='photoref'/>
                </div>
            </React.Fragment>

        )
        if (globalVars.token){
            return (
                <React.Fragment>
                    <AdminPanel />
                    <div className='container' id='requestcontainer'>
                        <div className='row' id='requestrow'>
                            {showorder}
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
export default RequestRender