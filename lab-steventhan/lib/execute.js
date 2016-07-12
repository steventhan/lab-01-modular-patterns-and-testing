(function () {
  const cowsay = require('./cowsay');
  var input = process.argv[2] || 'Please tell me to say something';
  var output = input.match(/.{1,70}/g);
  var cow = cowsay.say(output);
  console.log(cow);
}());
