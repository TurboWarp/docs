const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TurboWarp Documentation',
  url: 'https://docs.turbowarp.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'TurboWarp',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'TurboWarp Documentation',
      items: [
        {
          href: '/development/',
          label: 'Development',
          position: 'left'
        },
        {
          href: 'https://turbowarp.org/',
          label: 'TurboWarp',
          position: 'right'
        },
        {
          href: 'https://github.com/TurboWarp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    hideableSidebar: true,
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/TurboWarp/docs/edit/master/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/TurboWarp/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
