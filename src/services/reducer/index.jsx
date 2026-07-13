import signupReducer from '../reducer/SignupReducer';
import signinReducer from './SigninReducer';
import userReducer from './UserReducer';
import conversationReducer from './CoversationReducer';
import directMessageReducer from './DirectMessageReducer';
import { combineReducers } from "redux";

const reducers = combineReducers({
    signupReducer: signupReducer,
    signinReducer: signinReducer,
    userReducer: userReducer,
    conversationReducer:conversationReducer,
    directMessageReducer:directMessageReducer
});

export default reducers;