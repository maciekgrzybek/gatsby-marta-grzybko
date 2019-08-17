import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
      props.postClass
    } ${props.node.images[0] ? `with-image` : `no-image`}`}
    style={
      props.node.images.length > 0 && {
        backgroundImage: `url(${
          props.node.images[0].fluid.src
        })`,
      }
    }
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.title || props.node.fields.slug}
        </h2>
      </div>
    </Link>
  </article>
)
