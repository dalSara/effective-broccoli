/*
group: pages
name: Article Page
*/

import React from 'react';
import Layout from '../../layout';

import content from './article-page.json';
import ArticleContent from 'components/article-content';
import ArticleHero from 'components/article-hero';
import ArticleInfo from 'components/article-info';
import ArticleIntro from 'components/article-intro';

const ArticlePage = () => (
  <Layout>
    <ArticleHero {...content.hero} />
    <ArticleContent>
      <ArticleContent.Primary>
        <ArticleIntro {...content.intro} />
      </ArticleContent.Primary>
      <ArticleContent.Secondary>
        <ArticleInfo {...content.info} />
      </ArticleContent.Secondary>
    </ArticleContent>
  </Layout>
);

export default ArticlePage;
