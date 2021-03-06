/* globals expect, describe, it */
require('../spec_helper');
const User = require('../../models/user');

describe('User', function() {
  it('should be invalid if firstName is empty', function(done) {
    const user = new User();

    user.validate(function(err) {
      expect(err.errors.firstName).to.exist;
      done();
    });
  });
  it('should be invalid if lastName is empty', function(done) {
    const user = new User();

    user.validate(function(err) {
      expect(err.errors.lastName).to.exist;
      done();
    });
  });
  it('should be invalid if role is empty', function(done) {
    const user = new User();

    user.validate(function(err) {
      expect(err.errors.role).to.exist;
      done();
    });
  });
  it('should be invalid if email is empty', function(done) {
    const user = new User();

    user.validate(function(err) {
      expect(err.errors.email).to.exist;
      done();
    });
  });
  
  it('should be invalid if cohort is empty', function(done) {
    const user = new User();

    user.validate(function(err) {
      expect(err.errors.cohort).to.exist;
      done();
    });
  });

  it('should have a function validatePassword', function(done) {
    const person = new User({
      username: 'person',
      email: 'person@person.com',
      password: 'password',
      passwordConfirmation: 'password'
    });

    expect(person.validatePassword).to.be.a('function');
    done();
  });
});
