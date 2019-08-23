const React = require('react');
const { useStaticQuery } = require('gatsby');
const Layout = require('./src/components/layout').default;

require('./src/utils/css/components/global.css');
require('./src/utils/normalize.css');
require('./src/utils/css/screen.css');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}><div>
    {element}
  </div></Layout>;
};
