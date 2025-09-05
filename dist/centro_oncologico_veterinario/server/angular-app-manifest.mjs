
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/familias"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 799, hash: 'e2c2bb5d3054f603b8ce81fcba45b73e88c8f4a9135719d4ba2e678448242eab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '4a8e4be0e7ec54db725d9ef5396da0f7e2e92a1b462985300e0237ab15f1741d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4276, hash: '4df5bb3c3da683cad1ad7476f68c04783a3cfaaf30b4c80c4ddd48cbbefb967b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'familias/index.html': {size: 25547, hash: 'cf9d61b225d9d00b7a7e047b126859e6317cab7a3c04bc10c15fce9fe4b6eeb1', text: () => import('./assets-chunks/familias_index_html.mjs').then(m => m.default)},
    'styles-FOQ3FNTO.css': {size: 1425, hash: 'flpA3E4gKL4', text: () => import('./assets-chunks/styles-FOQ3FNTO_css.mjs').then(m => m.default)}
  },
};
