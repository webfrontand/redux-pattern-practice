import React, { Component } from 'react';
import { List } from './';


const Header = ({selectMenu, selected}) => {
	return (
		<div className="header">
			<ul>
				<List onClick={() => {selectMenu("all")}} active={selected==='all'}>
					all
				</List>
				<List onClick={() => {selectMenu("product")}} active={selected==='product'}>
					product
				</List>
				<List onClick={() => {selectMenu("about")}} active={selected==='about'}>
					about
				</List>
			</ul>
		</div>
	)
}

export default Header;