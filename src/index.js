import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
import { itemsFetchData } from './actions/items';
import ItemsContainer from './components/ItemsContainer';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(itemsFetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items'))

render(
    <Provider store={store}>
        <ItemsContainer />
    </Provider>,
    document.getElementById('app')
);
