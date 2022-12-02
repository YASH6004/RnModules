import  GET_PAGE_LIST  from './actionType';


export function setPageList(pageList) {
    return {
        type: GET_PAGE_LIST,
        payload: pageList,
    };
}


export function getPageList() {
    return async (dispatch) => {
        try {
            const apiReq = await fetch('https://dummyjson.com/users', {
                method: 'GET'
            });
            console.log(apiReq.user);
            await dispatch(setPageList(apiReq));
            return apiReq || [];
        } catch (error) {
            console.error(error);
        }
    };
}