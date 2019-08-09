import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Row from '../row';
import Link from 'components/link';

const ArticleInfo = ({ addresses, category, city, country, website }) => (
  <Content theme={Content.themes.wide}>
    <Row theme={Row.themes.small}>
      <div className="article-info">
        <span className="article-info__category">{category}</span>
        <span className="article-info__country">{country}</span>
        {addresses &&
          addresses.map((address, index) => (
            <span className="article-info__adress" key={index}>
              {address}
            </span>
          ))}
        <span className="article-info__city">{city}</span>
        <Link className="article-info__link">{website}</Link>
      </div>
    </Row>
  </Content>
);
//TODO fix the link data
ArticleInfo.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  website: PropTypes.string
};

export default ArticleInfo;
