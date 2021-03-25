export function itemsFetchDataStarted () {
	return {
		type: 'FETCH_DATA_STARTED',
		payload: {}
	}
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'FETCH_DATA_SUCCESS',
		payload: {
			items: [...items],
		}
    }
}

export function itemsFetchDataFailure(error) {
	return {
		type: 'FETCH_DATA_FAIURE',
		payload: {
			error: error,
		}
	}
}

export function itemsFetchData(url) {
    return (dispatch) => {
		dispatch(itemsFetchDataStarted());
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
			.then(response => response.json())
			.then(items => dispatch(itemsFetchDataSuccess(items)))
			.catch(error => dispatch(itemsFetchDataFailure(error.message)))
    }
}

