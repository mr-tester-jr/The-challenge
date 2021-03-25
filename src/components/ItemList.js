import React from 'react';

export const ItemList = props => {
	return (
		<ul>
		{props.list.map( item => (
			<li key={ item.id }>
				{ item.label }
			</li>
		))}
		</ul>
	);
}

