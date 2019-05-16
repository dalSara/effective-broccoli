import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default',
  slim: 'slim',
  slimmer: 'slimmer',
  wide: 'wide'
};

const Content = ({ children, className, isShifted, theme }) =>
  !children ? null : (
    <div
      className={cn(
        'content',
        {
          [`content--${themes[theme]}`]: themes[theme]
        },
        className
      )}
    >
      <div
        className={cn('content__inner', {
          'content__inner--shifted': isShifted
        })}
      >
        {children}
      </div>
    </div>
  );

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isShifted: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Content.defaultProps = {
  theme: themes.default
};

Content.themes = themes;

export default Content;
