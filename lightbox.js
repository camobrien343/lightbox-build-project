const $thumbs = $('.thumbnails');
const $lightboxImg = $('.lightbox-img');
const $lightbox = $('.lightbox');
const $btnClose = $('.btn-close')
const $lightboxHeading = $('.lightbox-heading');
const $lightboxDesc = $('.lightbox-desc');

$thumbs.on('click', 'a', function (e) {
	e.preventDefault();
	const full = $(this).attr('href');
	$lightboxImg.attr('src', full);
	$lightbox.attr('data-state', 'visible');
	$lightboxHeading.html($(this).attr('data-title'));
	$lightboxDesc.html($(this).attr('data-desc'));

});

$btnClose.on('click', () => {
	$lightbox.attr('data-state', 'hidden');
});















