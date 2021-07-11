import { createStore, combineReducers, applyMiddleware} from "redux";
import { createForms } from "react-redux-form";
import { Photos } from './photos.js';
import { Comments } from './comments.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            photos: Photos,
            comments: Comments,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}