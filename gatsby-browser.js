const React = require('react');
const { useStaticQuery } = require('gatsby');
const Layout = require('./src/components/layout').default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
