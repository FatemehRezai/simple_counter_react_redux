import React from "react";
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import Counter from './_component/counter';
import counter from './_reducer';
import './_style/counter.scss'

const store = createStore(counter);
const rootElement = document.getElementById('root');

const render = () => ReactDom.render(
    <Counter
        value = {store.getState()}
        onIncrement = {() => {store.dispatch({type: 'INCREMENT'})}}
        onDecrement = {() => {store.dispatch({type: 'DECREMENT'})}}        
    />, rootElement
)

render();

store.subscribe(render);
