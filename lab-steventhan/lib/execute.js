(function () {
  const cowsay = require('./cowsay');
  var input = process.argv[2] || 'Please tell me to say something';
  var cow = cowsay.say(input);
  console.log(cow);
}());
