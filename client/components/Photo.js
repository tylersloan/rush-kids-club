import React from 'react';
import { Link } from 'react-router';
// import

const Photo = React.createClass({
	render() {
		const { post, i, comments } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} className="grid-photo" />
					</Link>
					<figcaption>
						<p>{post.caption}</p>
					</figcaption>
					<br/>
					{post.likes}
				</div>
			</figure>
		)
	}
})

export default Photo;