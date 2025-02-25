import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/es/blog',
    component: ComponentCreator('/es/blog', '802'),
    exact: true
  },
  {
    path: '/es/blog/archive',
    component: ComponentCreator('/es/blog/archive', 'c1d'),
    exact: true
  },
  {
    path: '/es/blog/authors',
    component: ComponentCreator('/es/blog/authors', 'e39'),
    exact: true
  },
  {
    path: '/es/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/es/blog/authors/all-sebastien-lorber-articles', '6e5'),
    exact: true
  },
  {
    path: '/es/blog/authors/yangshun',
    component: ComponentCreator('/es/blog/authors/yangshun', 'ed1'),
    exact: true
  },
  {
    path: '/es/blog/first-blog-post',
    component: ComponentCreator('/es/blog/first-blog-post', '041'),
    exact: true
  },
  {
    path: '/es/blog/long-blog-post',
    component: ComponentCreator('/es/blog/long-blog-post', '13f'),
    exact: true
  },
  {
    path: '/es/blog/mdx-blog-post',
    component: ComponentCreator('/es/blog/mdx-blog-post', 'a97'),
    exact: true
  },
  {
    path: '/es/blog/tags',
    component: ComponentCreator('/es/blog/tags', 'b1d'),
    exact: true
  },
  {
    path: '/es/blog/tags/docusaurus',
    component: ComponentCreator('/es/blog/tags/docusaurus', 'f69'),
    exact: true
  },
  {
    path: '/es/blog/tags/facebook',
    component: ComponentCreator('/es/blog/tags/facebook', '0c3'),
    exact: true
  },
  {
    path: '/es/blog/tags/hello',
    component: ComponentCreator('/es/blog/tags/hello', '36c'),
    exact: true
  },
  {
    path: '/es/blog/tags/hola',
    component: ComponentCreator('/es/blog/tags/hola', '484'),
    exact: true
  },
  {
    path: '/es/blog/welcome',
    component: ComponentCreator('/es/blog/welcome', '8c8'),
    exact: true
  },
  {
    path: '/es/markdown-page',
    component: ComponentCreator('/es/markdown-page', '724'),
    exact: true
  },
  {
    path: '/es/docs',
    component: ComponentCreator('/es/docs', '406'),
    routes: [
      {
        path: '/es/docs',
        component: ComponentCreator('/es/docs', '270'),
        routes: [
          {
            path: '/es/docs',
            component: ComponentCreator('/es/docs', '3b8'),
            routes: [
              {
                path: '/es/docs/',
                component: ComponentCreator('/es/docs/', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/spoke-admin',
                component: ComponentCreator('/es/docs/category/spoke-admin', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/spoke-texters',
                component: ComponentCreator('/es/docs/category/spoke-texters', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/spoke-admin/',
                component: ComponentCreator('/es/docs/spoke-admin/', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/spoke-admin/10dlc-compliance',
                component: ComponentCreator('/es/docs/spoke-admin/10dlc-compliance', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/spoke-texters/add-tags',
                component: ComponentCreator('/es/docs/spoke-texters/add-tags', '65d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/es/',
    component: ComponentCreator('/es/', '124'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
