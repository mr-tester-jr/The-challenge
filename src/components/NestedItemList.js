import React from 'react';
import styles from './nested.module.css'

const hasChildren = item => {
	return item.children && item.children.length;
}

const Item = item => {
	return (
		<span key={ item.id } >
			<li className={ styles.task } key={ item.id }>{ item.label } </li>
			{ hasChildren(item) && <NestedItemList list={item.children} /> }
		</span>
	)
}

export const NestedItemList = props => {
	return (
		<ul className={ styles.nested } key={ props.list.length }>
			{props.list.map(item => Item(item))}
		</ul>
	)
}