import React from 'react';

const List = ({children, active, onClick}) => {
	return (
		<li onClick={onClick} className={`${active && 'active'}`}>
			<a>{children}</a>
		</li>
	)
}

export default List;