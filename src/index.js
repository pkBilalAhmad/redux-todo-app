import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./todoApp";
import { Provider } from 'react-redux';
import { createStore,combineReducers } from 'redux';
import { data } from './redux/reducers'


const store = createStore(combineReducers({
    data
}))
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    rootElement
);
