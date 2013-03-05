(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery);

jQuery(function() {
  jQuery("*").each(function() {
    if (jQuery(this).css("background-image") != "" && jQuery(this).css("background-image") != "none") {

      var bg_url = jQuery(this).css("background-image");
      // ^ Either "none" or url("...urlhere..")
      bg_url = bg_url.match(/^url\(['"](.+)["']\)$/);
      bg_url = bg_url ? bg_url[1] : ""; // If matched, retrieve url, otherwise ""

      jQuery.preLoadImages(bg_url);
      console.log(bg_url);
    }
  });
  jQuery("img").each(function() {
    if (jQuery(this).attr("src") != "" && jQuery(this).attr("src") != "undefined") {
      jQuery.preLoadImages(jQuery(this).attr("src"));
    }
  });

});