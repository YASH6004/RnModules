import { combineReducers } from 'redux';
import pageReducer from './loginReducer/loginreducer';
// const rootReducer = ()=>combineReducers({
// //   changeTheNumber,
// //   changeThePrice,
// //   cartReducer,
// //   favReducer,
// });

// export default rootReducer;


const rootReducer = combineReducers(
    { pageList: pageReducer }
);
export default rootReducer;