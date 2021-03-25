const initialState = {
	loading: false,
	items: [],
	error: null
};

export function itemsReducer (state = initialState, action) {
    switch (action.type) {
		case 'FETCH_DATA_STARTED':
			return {
				...state,
				loading: true,
				error: null,
				items: []
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				...state,
				loading: false,
				error: null,
				items: [...action.payload.items]
			};
		case 'FETCH_DATA_FAIURE':
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
}
