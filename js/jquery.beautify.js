var $ = require('jquery');
(function($) {
  var beautify = require('js-beautify');

  $.fn.beautify = function(options) {
    options = options || {};

    return this.each(function() {
      var beautified = beautify($(this).text(), options);
      $(this).text(beautified);
    });
  };
})($);
