import {
	FETCHING_ALL_GIFS,
	FETCHING_GIF_END,
	FETCHING_GIF_START,
	FETCHING_GIF_FAIL,
} from "../../types";

const initialState = {
	gifs: [],
	pagination: {
		total_count: 0,
		count: 0,
		offset: 0,
	},
	loading: false,
	error: "",
	success: false,
};

export const countReducer = function (state = initialState, action) {
	switch (action.type) {
		case FETCHING_ALL_GIFS:
			return {
				...state,
				gifs: action.payload.data,
				pagination: action.payload.pagination,
				error: "",
			};
		case FETCHING_GIF_END:
			return {
				...state,
				loading: action.payload,
			};
		case FETCHING_GIF_START:
			return {
				...state,
				loading: action.payload,
			};
		case FETCHING_GIF_FAIL:
			return {
				...state,
				gifs: [],
				pagination: {
					total_count: 0,
					count: 0,
					offset: 0,
				},
				error: "Error",
			};

		default:
			return state;
	}
};
