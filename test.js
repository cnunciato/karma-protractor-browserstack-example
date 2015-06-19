var https = require('https');
var fs = require('fs');
var os = require('os');
var unzip = require('unzip');
var spawn = require('child_process').spawn;
var app = spawn('node', ['./bin/www'], { stdio: 'inherit' });
var executableName = 'BrowserStackLocal';
var zipName = executableName + '-' + os.type().toLowerCase() + '-' + os.arch().toLowerCase() + '.zip';
var downloadUrl = 'https://www.browserstack.com/browserstack-local/' + zipName;
var localZip = fs.createWriteStream(zipName);
var browserstackLocal;
var protractor;
var karma;
var delay = 5000;

var request = https.get(downloadUrl, function(response) {
  response.pipe(localZip);
});

localZip.on('close', function() {

  fs.createReadStream(zipName)
    .pipe(unzip.Extract({ path: '.' }))
    .on('close', function() {

      karma = spawn('node_modules/.bin/karma', ['start', 'karma.conf.js', '--single-run'], { stdio: 'inherit' });
      karma.on('exit', function() {

        setTimeout(function() {
          browserstackLocal = spawn('BrowserStackLocal', [process.env.BS_AUTHKEY, 'localhost,3000,0'], { stdio: 'inherit' });

          setTimeout(function() {
            protractor = spawn('node_modules/.bin/protractor', ['protractor.conf.js'], { stdio: 'inherit' });

            protractor.on('exit', function() {
              fs.unlinkSync(executableName);
              fs.unlinkSync(zipName);
              browserstackLocal.kill();
              app.kill();
            });
          }, delay);
        }, delay);
      });
    });
});

process.on('exit', function() {
  karma.kill();
  browserstackLocal.kill();
  app.kill();
});
