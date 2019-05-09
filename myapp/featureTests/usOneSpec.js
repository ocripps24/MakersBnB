module.exports = {
  'step one: navigate to MakersBnB and sign up' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .setValue('signUpName', 'Bob Jones')
      .setValue('signUpEmail', 'jonesbob@email.com')
      .setValue('signUpPassword', '****')
      .click('signUp')
  },

  'step two: log in to dashboard' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .setValue('logInEmail', 'jonesbob@email.com')
      .setValue('logInPassword', '****')
      .click('logIn')
      .assert.urlEquals('http://localhost:3000/dashboard')
      .end();
  }
};
