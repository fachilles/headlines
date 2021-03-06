import { API_BBC_NEWS } from '../api/Constants';

export const DO_REQUET_NEWS = 'DO_REQUEST_NEWS';
export const DONE_REQUEST_NEWS = 'DONW_REQUEST_NEWS';

function doRequestNewsAction(params) {
    return {
        type: DO_REQUET_NEWS,
        params
    }
}

function doneRequestNewsAction(result) {
    return {
        type: DONE_REQUEST_NEWS,
        result
    }
}

export function doFetchNews() {
    return dispatch => {
        dispatch(doRequestNewsAction());

        fetch(API_BBC_NEWS).then(response => {
            if (response && response.ok) {
                return response.json();
            }
        }).then(response => { console.log(response);
            dispatch(doneRequestNewsAction(response));
        }).catch(err => {
            dispatch(doneRequestNewsAction(err));
        });
    }
}

