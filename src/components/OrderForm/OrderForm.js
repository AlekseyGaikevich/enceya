/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../App.scss';
import './OrderForm.scss';
import {Link} from 'react-router-dom';
import logoHeader from "../../assets/img/logo_header.svg";
import OrderFormItemsContainer from "./OrderFormItems/OrderFormItemsContainer";

const OrderForm = () => {

    const submitHandler = event => {
        event.preventDefault()
    };

    return (
        <div className="web">
            <div className="header_logo">
                <div className="logotype">
                    <img src={logoHeader} className="logo_enceya" alt="enceya"/>
                </div>
                <Link to="/" className="btn_back">&lt; Back</Link>
            </div>
            <form onSubmit={submitHandler}>
                <div className="service_choice">
                    <div className="service_choice__header">
                        What services interest you?<sup>*</sup>
                    </div>
                    <ul>
                        <OrderFormItemsContainer />
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;