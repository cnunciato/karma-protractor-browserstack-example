var _ = require('lodash');

var browserstack = {
  'browserstack.user': process.env.BS_USERNAME,
  'browserstack.key': process.env.BS_AUTHKEY,
  'browserstack.local': !!process.env.BS_LOCAL,
  'browserstack.debug': !!process.env.BS_DEBUG,
  'project': process.env.BS_PROJECT,
};

var multis = [
  {
    browserName: 'internet explorer',
    os: 'windows',
    os_version: '8'
  },
  {
    browserName: 'firefox',
    os: 'windows',
  },
  {
    browserName: 'safari',
    os: 'os x',
    os_version: 'lion'
  }
];

console.log(process.env.BS_USERNAME);

exports.config = {

  multiCapabilities: _.map(multis, function(o) { 
    return _.merge(_.clone(browserstack), o) 
  }),

  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['test/e2e.js']
};
