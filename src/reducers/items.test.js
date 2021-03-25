import rootReducer from './index';

describe('items reducer test', () => {
	it('set correct loading status', () => {
		const state = {
			loading: false,
			items: [],
			error: null
		};

		const action = {
			type: 'FETCH_DATA_STARTED',
			payload:{}
		};

		const expectedState = {	items:
			{ items: [], error: null, loading: true }};
		const newState = rootReducer(state, action);

		expect(newState.items.loading).toEqual(expectedState.items.loading);
	});

	it('set correct error status', () => {
		const state = {
			loading: false,
			items: [],
			error: null
		};

		const action = {
			type: 'FETCH_DATA_FAIURE',
			payload: { error: 'TEST-ERROR' }
		};

		const expectedState = {items:
			{ items: [], error: 'TEST-ERROR', loading: false }};
		const newState = rootReducer(state, action);

		expect(newState.items.error).toEqual(expectedState.items.error);
	});

	it('set correct faked items', () => {
		const state = {
			loading: false,
			items: [],
			error: null
		};

		const action = {
			type: 'FETCH_DATA_SUCCESS',
			payload: { items: [1,2,3] }
		};

		const expectedState = {
			items:{ items: [1,2,3], error: null, loading: false }};
		const newState = rootReducer(state, action);

		expect(newState.items.items).toEqual(expectedState.items.items);
	});	
});