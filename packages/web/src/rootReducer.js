import { combineReducers } from 'redux';

import MAIN from './pages/MainPage/reducer';
import likers from './components/after/organisms/LikersModal/reducer';

const rootReducer = combineReducers({
  MAIN,
  likers,
});

export default rootReducer;
