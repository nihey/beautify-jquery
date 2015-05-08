(function($) {
  var beautify = require('js-beautify');

  $.fn.beautify = function(options) {
    options = options || {};

    return this.each(function() {
      var beautified = beautify($(this).text().trim(), options);
      $(this).text(beautified);
    });
  };
}(window.$));
