import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Image = ({ alt, src, className }) =>
  !src ? null : <img className={cn('image', className)} src={src} alt={alt} />;

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};

Image.defaultProps = {
  alt: ''
};

export default Image;
