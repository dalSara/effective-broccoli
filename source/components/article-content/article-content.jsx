/* eslint-disable react/no-multi-comp*/
import React from 'react';
import PropTypes from 'prop-types';

const ArticleContent = ({ children }) => (
  <div className="article-content">{children}</div>
);

const ArticleContentPrimary = ({ children }) => (
  <div className="article-content__primary">{children}</div>
);

const ArticleContentSecondary = ({ children }) => (
  <div className="article-content__secondary">{children}</div>
);

ArticleContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

ArticleContentPrimary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

ArticleContentSecondary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

ArticleContent.Primary = ArticleContentPrimary;
ArticleContent.Secondary = ArticleContentSecondary;

export default ArticleContent;
