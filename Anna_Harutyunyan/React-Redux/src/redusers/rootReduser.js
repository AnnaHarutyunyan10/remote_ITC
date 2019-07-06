import { combineReducers } from 'redux';
import img from './card_reduser';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    img,
    authentication,
    registration,
    users,
    alert 
});

export default rootReducer;