module.exports = function(config) {

  config.set({

    frameworks: [
      'browserify',
      'jasmine'
    ],
    
    files: ['test/unit.js'],

    preprocessors: {
      'test/unit.js': [ 'browserify' ]
    },

    browsers: [
      'Chrome'
    ],

    browserify: {
      debug: true
    },

    singleRun: false
  });
};