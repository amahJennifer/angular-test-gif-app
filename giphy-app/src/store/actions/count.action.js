import {FETCHING_ALL_GIFS, FETCHING_GIF_END, FETCHING_GIF_START, FETCHING_GIF_FAIL} from "../types"
import axios from "axios"


export const fetchStart = payload=>({
    type:FETCHING_GIF_START,
    payload
})

export const fetchGifEnd = payload =>({
      type: FETCHING_GIF_END,
      payload
});

export const fetchGifSuccess =payload =>({
        type: FETCHING_ALL_GIFS,
        payload
});

export const fetchGifFail = payload =>({
        type: FETCHING_GIF_FAIL,
        payload
});


export const fetchAllGifs = (query) => {
    return async dispatch => {
        try {
            dispatch(fetchStart(true))
            const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${query}&limit=25&offset=0&rating=G&lang=en`);
            dispatch(fetchGifSuccess(res.data))
        } catch(error) {
            dispatch(fetchGifFail(error))
        }
        dispatch(fetchGifEnd(false))
    }
}

