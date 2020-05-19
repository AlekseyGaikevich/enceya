import React from 'react';
import './OrderFormItems.scss';

const OrderFormItems = ({state, onChoiceOrderNameHandler}) => {
    return state.orders.map(({id, label, active}) => {
        return (
            <li
                key={id}
                className={`order_name ${active && 'active'}`}
                onClick={() => onChoiceOrderNameHandler(id, active)}
            >
                {label}
            </li>
        )
    })
};

export default OrderFormItems;