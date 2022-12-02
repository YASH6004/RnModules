import { GET_PAGE_LIST } from '../../action/actionType';
const initialState = {
    pageList: []
};
const pageReducer = (state = initialState, action) => {
    console.log('action==>>',action.payload)
    switch(action.type) {
      case GET_PAGE_LIST:
        return {
          ...state,
          pageList:action.payload
        };
      default:
        return state;
    }
  }
  export default pageReducer;