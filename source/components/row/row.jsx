import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default',
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const Row = ({ children, theme }) =>
  !children ? null : (
    <div className={cn('row', { [`row--${themes[theme]}`]: themes[theme] })}>
      {children}
    </div>
  );

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Row.defaultProps = {
  theme: themes.default
};

Row.themes = themes;

export default Row;
