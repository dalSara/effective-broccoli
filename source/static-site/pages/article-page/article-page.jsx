/*
group: pages
name: Article Page
*/

import React from 'react';
import Layout from '../../layout';

import content from './article-page.json';
import ArticleHero from 'components/article-hero';
import ArticleInfo from 'components/article-info';

const ArticlePage = () => (
  <Layout>
    <ArticleHero {...content.hero} />
    <ArticleInfo {...content.info} />
  </Layout>
);

export default ArticlePage;
