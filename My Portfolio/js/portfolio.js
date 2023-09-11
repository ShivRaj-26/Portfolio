var typed = new Typed('#element', {
  strings: ['Open to Work.'],
  typeSpeed: 100,
  loop: true,
});

$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    autoplay: true,
    rewind: true,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  });
});

var $owl = $('.o1');

$owl.children().each(function (index) {
  $(this).attr('data-position', index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  items: 3,
  autoplayTimeout: 10000,
  smartSpeed: 1000,
});

$(document).on('click', '.owl-item>div', function () {
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});

let text1 = document.getElementById('mail').innerHTML;
const copyMail = async () => {
  try {
    await navigator.clipboard.writeText(text1);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

let text2 = document.getElementById('number').innerHTML;
const copyNumber = async () => {
  try {
    await navigator.clipboard.writeText(text2);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}