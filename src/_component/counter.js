import React, {Component} from 'react';
import '../_style/counter.scss'

class Counter extends Component{
    render(){
        const {value, onDecrement, onIncrement} = this.props;
        return <>
            <h2>count: {value}</h2>
            <div className="btn_group">
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </>;
    }

}

export default Counter;