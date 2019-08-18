import React from 'react';
import { Link } from 'gatsby';

export default ({ count, postClass, node }) => (
  <article
    className={`post-card ${count % 3 === 0 &&
      `post-card-large`} ${postClass} ${
      node.images[0] ? `with-image` : `no-image`
    }`}
    style={
      node.images.length > 0 && {
        backgroundImage: `url(${node.images[0].fluid.src})`,
      }
    }
  >
    <Link to={`/${node.fields.slug}`} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">{node.title || node.fields.slug}</h2>
      </div>
    </Link>
  </article>
);
