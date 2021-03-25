import React from 'react';
import { connect, useSelector } from 'react-redux';
import { sortedItems, nestedItems } from '../selectors/';
import { ItemList } from './ItemList';
import { NestedItemList } from './NestedItemList';
import './styles.css';


const ItemsContainer = props => {

	const { error, loading, items } = props;

	let sorted =  useSelector(sortedItems)
	//console.dir(sorted)
	let nested =  useSelector(nestedItems)
	//console.dir(nested)

	let content;
	if (error) {
		content = <h1>Error! { error.message }</h1>
	}

	if (loading) {
		content =  <h2>Loading...</h2>
	}

	if(items.length) {
		content = (
			<>
				<section>
					<ItemList list={ sorted } />
				</section>
				<section>
					<NestedItemList list={ nested } />
				</section>
			</>
		)
	}

	return (
		<main>
			{content}
		</main>

	)
}

const mapStateToProps = state => {
    return {
		items: state.items.items,
		loading: state.items.loading,
		error: state.items.error
    };
};

export default connect(mapStateToProps, null)(ItemsContainer);