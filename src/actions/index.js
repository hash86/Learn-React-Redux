import {
    ADD_ARTICLE,
    DATA_LOADED
} from "../constants/action-type"

export function addArticle(payload) {
    return {

        type: ADD_ARTICLE,
        payload
    };
};

//thunk
// export function getData() {
//     return function (dispatch) {

//         return fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({
//                     type: DATA_LOADED,
//                     payload: json
//                 });
//             });

//     }
// }

// saga
export function getData() {
    return {
        type: "DATA_REQUESTED"
    };
}