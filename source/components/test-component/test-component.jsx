import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../heading';
import Content from '../content';

const TestComponent = ({ heading, text }) => (
  <Content theme={Content.themes.slimmer}>
    <div className="test-component">
      <Heading level={2}> {heading}</Heading>
      <div>{text}</div>
    </div>
  </Content>
);

TestComponent.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string
};

export default TestComponent;
