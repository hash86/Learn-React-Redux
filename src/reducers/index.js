import {
    ADD_ARTICLE,
    DATA_LOADED
} from "../constants/action-type";


const initialState = {
    articles: [{
        title: 'hamid',
        id: 1
    }, {
        title: 'gonloosh',
        id: 2
    }],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    if (action.type == ADD_ARTICLE) {
        //state.articles.push(action.payload);  state must be immutate in Redux
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type == DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    return state;
}

export default rootReducer;