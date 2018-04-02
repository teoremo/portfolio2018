
$(document).ready(function() {
  $('div.image-switch span').mouseover(function(e) {
    if (e.target.nodeName.toLowerCase() == 'a') return;
    var image_src = $('a', this).data('image');
    var img = $('.image-container img');

    if (img.attr('src') != image_src) { // only do the fade if other image is selected
      img.fadeOut('fast', function() { // fadeout the current image
        img.attr('src', image_src).fadeIn(); // load and fadein new image
        });
    }
  });
});

