
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/web_COV/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/web_COV"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 807, hash: 'e9b66def604de8a6c87eb69b3cce1518d96d2793e72c54ec4e7be72cfc639e7a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: '2eb0f2b2fb1e1bb84648b28ff6c65975c0b198f40e0d53b491e99a9833fa9488', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16999, hash: 'ec8a6a1ea4648b1c23351744c267ad68316fd500ce98661b1cce44b0953a24bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-W44TZVMQ.css': {size: 1380, hash: 'wCwaGH9xLWw', text: () => import('./assets-chunks/styles-W44TZVMQ_css.mjs').then(m => m.default)}
  },
};
