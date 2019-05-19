/*
group: pages
name: Article Page
*/

import React from 'react';
import Layout from '../../layout';

import content from './article-page.json';
import ArticleHero from 'components/article-hero';

const ArticlePage = () => (
  <Layout>
    <ArticleHero {...content.hero} />
  </Layout>
);

export default ArticlePage;
