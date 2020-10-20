import {combineReducers} from "redux";
import { user } from './user/reducer'

const rootReducer = combineReducers({
	user: user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
