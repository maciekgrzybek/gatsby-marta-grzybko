import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import SEO from '../components/seo';
import PortfolioCard from '../components/portfolioCard';

const PortfolioListing = ({ data, category }) => {
  const portfolioItems = data.allContentfulPortfolioItem.edges.filter(item => item.node.category.title === category);

  return (
    <>
      <SEO
        title="Projekty"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}
      
      <div className="post-feed">
        {portfolioItems.map(({ node }, i) => {
          return (
            <PortfolioCard
              key={node.fields.slug}
              count={i + 1}
              node={node}
              postClass={`post`}
            />
          );
        })}
      </div>
      
      <a href='#' className="back-link">Do góry</a>
    </>
  );
};

export default PortfolioListing;
