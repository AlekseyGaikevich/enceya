import React, {Component} from 'react';
import OrderFormItems from "./OrderFormItems";

export default class OrderFormItemsContainer extends Component {

    id = 1;

    createOrderItem(label) {
        return {
            id: this.id++,
            label,
            active: false
        }
    };

    state = {
        orders: [
            this.createOrderItem('Website design'),
            this.createOrderItem('Apps design'),
            this.createOrderItem('Logo design'),
            this.createOrderItem('Service design'),
            this.createOrderItem('Technical design'),
            this.createOrderItem('Branding'),
            this.createOrderItem('Naming'),
            this.createOrderItem('System design')
        ]
    };

    toggleProperty(arr, id) {
        const idx = arr.findIndex(el => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, active: !oldItem.active};
        console.log(idx, 'oldItem:', oldItem, 'newItem:', newItem)

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    };

    onChoiceOrderNameHandler = (orderId) => {
        this.setState(({orders}) => {
            return {
                orders: this.toggleProperty(orders, orderId)
            }
        });
    };

    render() {
        return (
            <>
                <OrderFormItems
                    state={this.state}
                    onChoiceOrderNameHandler={this.onChoiceOrderNameHandler}
                />
                {this.state.orders[0].active && <h3>0</h3>}
                {this.state.orders[1].active && <h3>1</h3>}
                {this.state.orders[2].active && <h3>2</h3>}
                {this.state.orders[3].active && <h3>3</h3>}
                {this.state.orders[4].active && <h3>4</h3>}
                {this.state.orders[5].active && <h3>5</h3>}
                {this.state.orders[6].active && <h3>6</h3>}
                {this.state.orders[7].active && <h3>7</h3>}
            </>
        )
    }
};