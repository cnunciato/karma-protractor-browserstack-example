# karma-protractor-browserstack-example

This is a bare-bones [Express](http://expressjs.com/) app ([generated](http://expressjs.com/starter/generator.html)) 
set up as an example integration of [Karma](http://karma-runner.github.io/0.12/index.html), 
[Jasmine](http://jasmine.github.io/), [Protractor](https://angular.github.io/protractor)
and [BrowserStack](http://browserstack.com) to run both unit and acceptance/end-to-end 
tests. (It's intended as a general-purpose example, so it doesn't include Angular.) 

To run it:

  1. Install [Node.js](https://nodejs.org/).

  2. Download and unzip the appropriate [BrowserStackLocal binary](https://www.browserstack.com/local-testing)
     and put it somewhere you can execute it, which you'll do in Step 6 below.
  
  3. Install this app:

        npm install

  4.  Set a few environment variables to help set things up with BrowserStack:

        export BS_USERNAME="your-browserstack-username"
        export BS_AUTHKEY="your-browserstack-auth-key"
        export BS_LOCAL="true"
        export BS_DEBUG="true"

      Your BrowserStack username and auth key can be found [in your BrowserStack profile](https://www.browserstack.com/accounts/automate).

  5. In a Terminal tab, start this app (which is currently set up to run on localhost:3000):

        npm start

  6. In another, start BrowserStackLocal, using the BS_AUTHKEY environment variable 
     you set above:

        ./BrowserStackLocal $BS_AUTHKEY localhost,3000,0

  7. And then finally, in a third, run the tests, which runs Karma first, then Protractor:

        npm test

Enjoy.