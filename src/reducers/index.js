import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import homePage from './homePageReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  homePage,
  routing: routerReducer
});

export default rootReducer;
