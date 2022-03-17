import PhotoReducer from '../Reducers/PhotoReducer';
import thunk from 'redux-thunk';
import {createStore,combineReducers,applyMiddleware} from  'redux';
import AlbumReducer from '../Reducers/AlbumReducer';




const reducers = combineReducers({photos:PhotoReducer,albums:AlbumReducer})
const middleware = applyMiddleware(thunk)

export default createStore(reducers,middleware);


