module.exports = {
  'Demo' : function (browser) {
    browser
      .url('http://localhost:3000')
      .assert.containsText('h1', 'The Polyglot Developer')
      .end();
  }
};
