import React, { useState, useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import useOutsideClick from '@rooks/use-outside-click';

import Modal from '../components/modal';
import SEO from '../components/seo';

const PortfolioItemTemplate = ({ data }) => {
  const [lightboxIsOpen, toggleLigthbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const portfolioItem = data.contentfulPortfolioItem;
  const modalImageRef = useRef(null);

  useOutsideClick(modalImageRef, () => toggleLigthbox(false));

  function handleImageClick(image) {
    toggleLigthbox(true);
    setCurrentImageIndex(image);
  }

  function renderImages(images) {
    return images.map((image, i) => {
      return (
        <div
          onClick={() => {
            handleImageClick(i);
          }}
          key={image.id}
        >
          <Img
            className="kg-image"
            fluid={image.fluid}
            alt={data.contentfulPortfolioItem.title}
          />
        </div>
      );
    });
  }
  return (
    <>
      <SEO
        title={portfolioItem.title}
        description={
          portfolioItem.description
            ? portfolioItem.description.description
            : portfolioItem.title
        }
      />
      <Modal
        isOpen={lightboxIsOpen}
        updateOpen={toggleLigthbox}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        maxItems={portfolioItem.images.length - 1}
      >
        <img
          src={`https:${portfolioItem.images[currentImageIndex].file.url}`}
          ref={modalImageRef}
          alt=""
        />
      </Modal>
      <article
        className={`post-content ${portfolioItem.frontmatter || `no-image`}`}
      >
        <header className="post-content-header">
          <h1 className="post-content-title">{portfolioItem.title}</h1>
        </header>

        {portfolioItem.description && (
          <p className="post-content-excerpt">
            {portfolioItem.description.description}
          </p>
        )}
        {portfolioItem.images.length > 0 && renderImages(portfolioItem.images)}
        <footer className="post-content-footer"></footer>
      </article>
    </>
  );
};

export default PortfolioItemTemplate;

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    contentfulPortfolioItem(fields: { slug: { eq: $slug } }) {
      title
      description {
        description
      }
      images {
        id
        file {
          url
        }
        fluid(maxWidth: 1360) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
  }
`;
