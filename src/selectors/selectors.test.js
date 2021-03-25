import { sorted, nested, sortedItems, nestedItems } from './index';


describe('selectors', () => {
	it('correctly sort items', () => {
		const unsorted = { items:{
			items:[
			{ "id": 1, "label": "List item 1", "parent_id": 0 },
			{ "id": 2, "label": "List item 2", "parent_id": 0 },
			{ "id": 3, "label": "List item 3", "parent_id": 0 },

			{ "id": 6, "label": "List item 6", "parent_id": 1 },
			{ "id": 7, "label": "List item 7", "parent_id": 1 },
			{ "id": 8, "label": "List item 8", "parent_id": 7 },
			{ "id": 9, "label": "List item 9", "parent_id": 7 },

			{ "id": 4, "label": "List item 4", "parent_id": 0 },
			{ "id": 5, "label": "List item 5", "parent_id": 1 }
			]}}

		const expected = [
			{ "id": 1, "label": "List item 1", "parent_id": 0 },
			{ "id": 2, "label": "List item 2", "parent_id": 0 },
			{ "id": 3, "label": "List item 3", "parent_id": 0 },
			{ "id": 4, "label": "List item 4", "parent_id": 0 },
			{ "id": 5, "label": "List item 5", "parent_id": 1 },
			{ "id": 6, "label": "List item 6", "parent_id": 1 },
			{ "id": 7, "label": "List item 7", "parent_id": 1 },
			{ "id": 8, "label": "List item 8", "parent_id": 7 },
			{ "id": 9, "label": "List item 9", "parent_id": 7 }
		];

		const sorted = sortedItems(unsorted)

		expect(sorted).toEqual(expected);
	});

	it('correctly place children items', () => {
		const unsorted = {
			items: {
				items: [
					{ "id": 1, "label": "List item 1", "parent_id": 0 },
					{ "id": 2, "label": "List item 2", "parent_id": 0 },
					{ "id": 3, "label": "List item 3", "parent_id": 0 },

					{ "id": 6, "label": "List item 6", "parent_id": 1 },
					{ "id": 7, "label": "List item 7", "parent_id": 1 },
					{ "id": 8, "label": "List item 8", "parent_id": 7 },
					{ "id": 9, "label": "List item 9", "parent_id": 7 },

					{ "id": 4, "label": "List item 4", "parent_id": 0 },
					{ "id": 5, "label": "List item 5", "parent_id": 1 }
				]
			}
		}

		const expected = [
			{"id": 1, "label": "List item 1", "parent_id": 0, "children": [
				{ "id": 5, "label": "List item 5", "parent_id": 1 },
				{ "id": 6, "label": "List item 6", "parent_id": 1 },
				{ "id": 7, "label": "List item 7", "parent_id": 1, "children": [
					{ "id": 8, "label": "List item 8", "parent_id": 7 },
					{ "id": 9, "label": "List item 9", "parent_id": 7 }
				]},
			]},
			{ "id": 2, "label": "List item 2", "parent_id": 0 },
			{ "id": 3, "label": "List item 3", "parent_id": 0 },
			{ "id": 4, "label": "List item 4", "parent_id": 0 },

		];

		const nesed = nestedItems(unsorted)

		expect(nesed).toEqual(expected);
	});
});