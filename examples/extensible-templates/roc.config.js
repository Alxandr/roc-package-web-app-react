const path = require('path');

module.exports = {
  settings: {
    runtime: {
      applicationName: 'Extensible templates',
      serve: ['public'],
      template: {
        path: './views',
        name: 'entry.njk',
      },
    },
    build: {
      routes: './routes',
    },
  },
  project: {
    actions: [
      {
        hook: 'get-template-paths',
        action: () => () => (previousValue) => {
          return previousValue.concat(path.resolve('./views'));
        }
      },
      {
        hook: 'inherit-template',
        action: () => () => () => ({
          namespace: 'testA',
          template: 'A/a.njk',
        }),
      },
      {
        hook: 'inherit-template',
        action: () => () => () => ({
          namespace: 'testB',
          template: 'B/b.njk',
        }),
      },
      {
        hook: 'inherit-template',
        action: () => () => () => ({
          namespace: 'testC',
          template: 'C/c.njk',
        }),
      },
    ],
  },
};
