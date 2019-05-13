
function make_images() {
	$('.image-container').empty().justifiedImages({
	    images: [
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/3.jpg", width: 3264, height: 1836},
			],
		getSize: function(photo){
	        return {width: photo.width, height: photo.height};
	    },
		thumbnailPath: function(photo, width, height){
	        return photo.url;
	    }
	})
}

$(document).ready(make_images);
$(window).resize(make_images);

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 500);
});
