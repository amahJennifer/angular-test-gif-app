import {FETCHING_ALL_GIFS, FETCHING_GIF_END, FETCHING_GIF_START, FETCHING_GIF_FAIL} from "../../types"

const initialState={
    gifs:[],
    loading:false,
    error:"",
    success:false
}


export const countReducer = function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_ALL_GIFS:
            return {
                ...state,
                gifs :action.payload.data,
                error: "",
            }
        case FETCHING_GIF_END:
            return {
                 ...state,
                loading:action.payload
            }
        case FETCHING_GIF_START:
            return {
                 ...state,
                loading:action.payload
            }
        case FETCHING_GIF_FAIL:
            return {
                ...state,
                gifs: [],
                error: "Error",
            }

        default:
            return state;
    }
};
