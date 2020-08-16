import driversReducer from './reducer';
import { createStore, applyMiddleware ,combineReducers} from 'redux';
import thunkMiddleware from "redux-thunk";


let reducers =combineReducers({
    drivers:driversReducer
})
export const store = createStore(reducers,applyMiddleware(thunkMiddleware));