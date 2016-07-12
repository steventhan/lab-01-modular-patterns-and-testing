(function(){
  var cowsay = {};

  cowsay.say = function(output) {
    var cowsayText = '';
    for (var i = 0; i < output.length; i++) {
      cowsayText += ` ${output[i]} \n`;
    }

    var cow =
      `\n  ${'-'.repeat(output[0].length)}  \n` +
      `/${'-'.repeat(output[0].length + 2)}\\\n` +
      `${cowsayText}` +
      `\\${'-'.repeat(output[0].length + 2)}/\n` +
      `  ${'-'.repeat(output[0].length)}\n` +
      `${' '.repeat(output[0].length / 2)}\\   ^__^\n` +
      `${' '.repeat(output[0].length / 2)}\\   (oo)\_______\n` +
      `${' '.repeat(output[0].length / 2 + 4)}(__)\\       )\\/\\\n` +
      `${' '.repeat(output[0].length / 2 + 8)}||----w |\n` +
      `${' '.repeat(output[0].length / 2 + 8)}||     ||\n`;
    return cow;
  };

  module.exports = cowsay;
}());
