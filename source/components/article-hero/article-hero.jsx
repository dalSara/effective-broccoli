import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../heading';
import Image from '../image';
import Content from '../content';
import Row from '../row';

const ArticleHero = ({ heading, image, text }) => (
  <Content theme={Content.themes.slim}>
    <Row theme={Row.themes.small}>
      <div className="article-hero">
        <Heading>{heading}</Heading>
        <div className="article-hero__image-container">
          <Image initialSize={200} {...image} />
        </div>
        <div className="article-hero__text-container">{text}</div>
      </div>
    </Row>
  </Content>
);

ArticleHero.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.object,
  text: PropTypes.string
};

export default ArticleHero;
