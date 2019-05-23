// NOTE: Do not edit this file. It is built by running `./scripts/create-static-site-files.js`
// NOTE: Generated at 2019-05-21T16:14:03.948Z
import ArticlePage from './article-page';
import ExamplePage from './example-page';
import PageIndex from './page-index';
import Test from './test';

export default [
  {
    component: ArticlePage,
    group: 'pages',
    name: 'Article Page',
    path: '/article-page'
  },
  {
    component: ExamplePage,
    group: 'Eksempelgruppe',
    name: 'Eksempelside',
    path: '/eksempelside'
  },
  {
    component: PageIndex,
    group: 'Ungrouped',
    name: 'Page Index',
    path: '/'
  },
  {
    component: Test,
    group: 'Ungrouped',
    name: 'test',
    path: '/test'
  }
];
