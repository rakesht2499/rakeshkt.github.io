window.addEventListener('scroll', function(){ checkAnimation(); }, true);

window.onload = function() {
  checkAnimation();

  // For setting positions of Logo, and other stuffs
  var h = window.innerHeight;
  console.log(h);
  console.log(h/4);
  // document.getElementById("mylogo").style.margin = h/6+" 0 "+h/6+" 5%";
  document.getElementById("aboutme").style.margin = h/3+" 0 "+h/4+" 0";
  // document.getElementById("experience").style.height = h+"px";
}

function gotoExperience() {
  document.querySelector('#experience').scrollIntoView({
      behavior: 'smooth'
  });
}

function gotoMyIntro() {
  document.querySelector('#FirstRowAboutMe').scrollIntoView({
      behavior: 'smooth'
  });
}

function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnimation() {
  var $elem = $('#experience');

  if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass('animated fadeInRightBig');
  } //else {
    //  $elem.removeClass('animated slideInLeft');
 // }
}
