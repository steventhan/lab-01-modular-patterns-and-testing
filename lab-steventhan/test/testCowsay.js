const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');

describe('the cowsay function', function() {
  it('should return the cow', function() {
    expect(cowsay.say('test')).to.eql('\n  -  \n/---\\\n t \n e \n s \n t \n\\---/\n  -\n\\   ^__^\n\\   (oo)_______\n    (__)\\       )\\/\\\n        ||----w |\n        ||     ||\n');
  });
});
