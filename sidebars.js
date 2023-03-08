module.exports = {
  sidebar: [
    'intro',
    'website/unshared-projects',
    'website/cloud-variables',
    {
      type: 'category',
      label: 'Advanced Settings',
      collapsed: false,
      items: [
        'website/settings/overview',
        'website/settings/custom-fps',
        'website/settings/interpolation',
        'website/settings/high-quality-pen',
        'website/settings/remove-fencing',
        'website/settings/remove-misc-limits',
        'website/settings/infinite-clones',
        'website/settings/warp-timer',
        'website/settings/custom-stage-size',
        'website/settings/disable-compiler'
      ]
    },
    'website/embedding',
    'website/how-it-works',
    'website/javascript',
    'website/turbowarp-blocks',
    'website/translate',
    'website/url-parameters',
    'website/scratch-accounts',
    'website/donate',
  ],
  development: [
    'development/home',
    {
      type: 'category',
      label: 'Custom Extension Tutorial',
      collapsed: false,
      items: [
        'development/extensions/introduction',
        'development/extensions/hello-world',
        'development/extensions/inputs',
        'development/extensions/async',
        'development/extensions/sandbox',
        'development/extensions/unsandboxed',
        'development/extensions/better-development-server',
        'development/extensions/assorted-apis',
        'development/extensions/hats',
        'development/extensions/compatibility',
        'development/extensions/share',
        'development/extensions/wrapping-up',
      ]
    },
    'development/getting-started',
    'development/globals',
    'development/scratchx'
  ],
  packager: [
    'packager/home',
    'packager/embedding',
    'packager/commercial-use',
    'packager/dynamic-stage-resize',
    'packager/special-cloud-behaviors',
    'packager/offline',
  ]
};
