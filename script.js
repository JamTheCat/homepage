
function make_images() {
	$('.image-container').empty().justifiedImages({
	    images: [
			{url: "img/1.jpg", width: 3264, height: 1836},
			{url: "img/2.png", width: 1836, height: 3264},
			{url: "img/3.jpg", width: 3264, height: 1836},
			{url: "img/4.png", width: 1836, height: 3264},
			{url: "img/5.png", width: 1836, height: 3264},
			{url: "img/6.png", width: 1836, height: 3264},
			{url: "img/7.jpg", width: 3264, height: 1836},
			{url: "img/8.png", width: 1836, height: 3264},
			{url: "img/9.png", width: 1836, height: 3264},
			{url: "img/10.jpg", width: 3264, height: 1836},
			{url: "img/11.png", width: 1836, height: 3264},
			{url: "img/12.png", width: 1836, height: 3264},
			{url: "img/13.jpg", width: 3264, height: 1836},
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
