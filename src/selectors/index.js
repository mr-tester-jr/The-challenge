import { createSelector } from 'reselect'

const bubleSort = (a, b) => (parseInt(a.id, 10) - parseInt(b.id, 10));
const sorted = items => items.slice().sort(bubleSort);
const nested = (items) => {
	let _nested = items.slice().reduceRight((accum, item, idx, original) => {
		let _parent_idx = item.parent_id - 1;
		let _item = accum[idx] || item;
		if (_parent_idx > -1) {
			accum[_parent_idx] = accum[_parent_idx] || Object.assign({}, original[_parent_idx]);
			accum[_parent_idx].children = accum[_parent_idx].children || [];
			accum[_parent_idx].children.unshift(_item);//"push" into parent
			if (accum[idx]?.parent_id) accum.splice(idx, 1);//drop item with parent_id != 0

		} else {
			accum[idx] = accum[idx] || _item;//top level item
		}

		return accum;
	}, [])

	return _nested.filter(Boolean)
}

const items = state => state.items.items;
export const sortedItems = createSelector(
	[items],
	items => sorted(items));

export const nestedItems = createSelector(
	[sortedItems],
	sortedItems => nested(sortedItems));
