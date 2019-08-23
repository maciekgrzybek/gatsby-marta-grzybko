import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import SEO from '../components/seo';
import PortfolioCard from '../components/portfolioCard';

const PortfolioListing = ({ data, category }) => {
  console.log(data)
  const portfolioItems = data.allContentfulPortfolioItem.edges.filter(item => item.node.category.title === category);

  return (
    <div>
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
      <div>
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
      </div>

    </div>
  );
};

export default PortfolioListing;
