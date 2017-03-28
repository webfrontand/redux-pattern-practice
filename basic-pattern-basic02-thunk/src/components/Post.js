import React, { Component } from 'react';

const Post = ({title, body, index}) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
			<h2>{index}</h2>
		</div>
	)
}

export default Post;