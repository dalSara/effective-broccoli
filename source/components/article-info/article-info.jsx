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
        <Link className="article-info__link" href={website.text}>
          {website.text}
        </Link>
      </div>
    </Row>
  </Content>
);

ArticleInfo.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  website: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default ArticleInfo;
