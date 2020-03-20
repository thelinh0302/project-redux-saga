import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './../reducers';
import thunk from 'redux-thunk';
import RootSaga from './../sagas/index';
const composeEnhancers =process.env.NODE_ENV !== 'production' &&
typeof window === 'object'&&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload:false
})
:compose;

const sagaMiddleware = createSagaMiddleware();

const configStore =()=>{
    const middleware=[ thunk,sagaMiddleware];
    const enhancers =[ applyMiddleware(...middleware)];
    const store = createStore(rootReducers,composeEnhancers(...enhancers));
    sagaMiddleware.run(RootSaga);
    return store;
};
export default configStore;