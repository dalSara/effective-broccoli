import React from 'react';
import PropTypes from 'prop-types';
import Row from '../row';

const ArticleIntro = ({ text }) => (
  <Row theme={Row.themes.small}>
    <div className="article-intro">
      <p className="article-intro__text">{text}</p>
    </div>
  </Row>
);

ArticleIntro.propTypes = {
  text: PropTypes.string
};

export default ArticleIntro;
