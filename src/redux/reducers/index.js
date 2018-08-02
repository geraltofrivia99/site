import {combineReducers} from 'redux';
import {scroll} from './scroll';
import {sections} from './section';
import {sidemenu} from './sidemenu';

export default combineReducers({
  scroll,
  sections,
  sidemenu
});