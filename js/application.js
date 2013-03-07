jQuery(window).load(function() {
  jQuery("body").attr("loaded_image_count_on_page", jQuery("body").attr("image_count_on_page"));
});

var image_count_on_page = 0;
var loaded_image_count_on_page = 0;

(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      jQuery(cacheImage).load(function() {
        loaded_image_count_on_page++;
        jQuery("body").attr("loaded_image_count_on_page", loaded_image_count_on_page);
      });
      cache.push(cacheImage);
      image_count_on_page++;
      jQuery("body").attr("image_count_on_page", image_count_on_page);
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

    }
  });
  jQuery("img").each(function() {
    if (jQuery(this).attr("src") != "" && jQuery(this).attr("src") != "undefined") {
      jQuery.preLoadImages(jQuery(this).attr("src"));
    }
  });

});