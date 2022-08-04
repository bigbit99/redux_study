import {legacy_createStore as createStore} from 'redux';
import {combineReducers} from 'redux';
import todo from '../modules/todo';

const rootReducer = combineReducers({
    todo:todo
    //todo라는 key값에 모듈todo를 넣어둠 
});

const store = createStore(rootReducer);

export default store;