describe('My App', function() {

  var host;

  beforeEach(function() {
    host = process.env.host || 'http://localhost:3000'
    browser.ignoreSynchronization = true;
  });

  it('should have things on the home page', function() {
    browser.get(host);
    expect(element(by.css('h1')).getText()).toEqual('Express');
  });
});