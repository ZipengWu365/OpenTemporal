// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenTemporal',
  tagline: 'A curated hub for cross-disciplinary time-series knowledge.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Placeholder base URL that should later be replaced with the actual GitHub username.
  url: 'https://zipengwu365.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/OpenTemporal/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZipengWu365', // Update once the repository exists.
  projectName: 'OpenTemporal',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Keep edit links pointing to the GitHub repository for traceability.
          editUrl: 'https://github.com/ZipengWu365/OpenTemporal/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          routeBasePath: 'notes',
          blogTitle: 'Open Notes',
          blogDescription:
            'Reflective notes about the scope, boundaries, and philosophy of OpenTemporal.',
          // Keep edit links pointing to the GitHub repository for traceability.
          editUrl: 'https://github.com/ZipengWu365/OpenTemporal/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'OpenTemporal',
        logo: {
          alt: 'OpenTemporal logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {type: 'doc', docId: 'knowledge-base/overview', label: 'Knowledge Base', position: 'left'},
          {type: 'doc', docId: 'methods-concepts/overview', label: 'Methods & Concepts', position: 'left'},
          {type: 'doc', docId: 'applications/overview', label: 'Applications', position: 'left'},
          {type: 'doc', docId: 'learning-paths/overview', label: 'Learning Paths', position: 'left'},
          {type: 'doc', docId: 'tools-starter-kits/overview', label: 'Tools & Starter Kits', position: 'left'},
          {type: 'doc', docId: 'reading-room/overview', label: 'Reading Room', position: 'left'},
          {to: '/collaboration', label: 'Collaboration', position: 'left'},
          {href: 'https://github.com/ZipengWu365/OpenTemporal', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'About OpenTemporal',
            items: [
              {label: 'Project Overview', to: '/docs/knowledge-base/overview'},
              {label: 'Collaboration', to: '/collaboration'},
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/ZipengWu365/OpenTemporal',
              },
              {
                label: 'GitHub Pages Preview',
                href: 'https://zipengwu365.github.io/OpenTemporal/',
              },
            ],
          },
          {
            title: 'Social (placeholders)',
            items: [
              {
                label: 'Updates on Bluesky',
                href: 'https://bsky.app/profile/opentemporal.example',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/opentemporal',
              },
            ],
          },
        ],
        copyright:
          'OpenTemporal is a curated knowledge initiative. Replace placeholder links before public launch.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
