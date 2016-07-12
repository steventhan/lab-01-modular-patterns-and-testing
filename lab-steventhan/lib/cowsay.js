(function(){
  var cowsay = {};
  cowsay.text = 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd';

  cowsay.say = function(text) {
    var cow =
      `  ${'_'.repeat(text.length)}  \n` +
      `/${'-'.repeat(text.length + 2)}\\\n` +
      `| ${text} |\n` +
      `\\${'-'.repeat(text.length + 2)}/\n` +
      `  ${'-'.repeat(text.length)}\n` +
      `    \\   ^__^\n` +
      `    \\   (oo)\_______\n` +
      `        (__)\\       )\\/\\\n` +
      `           ||----w |\n` +
      `           ||     ||\n`;
    console.log(cow);
    console.log(text);
  }(cowsay.text);

  module.exports = cowsay;
}());
