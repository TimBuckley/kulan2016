import {combineReducers} from 'redux';
import BookingReducer from './reducer-bookingData';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  bookingData: BookingReducer,
  routing: routerReducer
});

export default allReducers
