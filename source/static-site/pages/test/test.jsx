/*
name: test
*/

import React from 'react';
import Layout from '../../layout';

import content from './test.json';
import TestComponent from 'components/test-component';

const Test = () => (
  <Layout>
    <TestComponent {...content} />
  </Layout>
);

export default Test;
