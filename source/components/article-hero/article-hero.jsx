import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../heading';
import Image from '../image';
import Content from '../content';
import Row from '../row';

const ArticleHero = ({ heading, image, credit, creditLabel }) => (
  <Content theme={Content.themes.slim}>
    <Row theme={Row.themes.medium}>
      <div className="article-hero">
        <Heading level={1}>{heading}</Heading>
        <div className="article-hero__image-container">
          <Image {...image} />
          {credit && (
            <div className="article-hero__credit-wrapper">
              <span className="article-hero__credit-label">{creditLabel}</span>
              <span>{credit}</span>
            </div>
          )}
        </div>
      </div>
    </Row>
  </Content>
);

ArticleHero.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  credit: PropTypes.string,
  creditLabel: PropTypes.string
};

export default ArticleHero;
