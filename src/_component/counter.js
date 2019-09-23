import React, {Component} from 'react';
import '../_style/counter.scss'

class Counter extends Component{
    render(){
        const {value, onDecrement, onIncrement} = this.props;
        return <div className="main">
            <h2>count: {value}</h2>
            <div className="btn_group">
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>;
    }

}

export default Counter;