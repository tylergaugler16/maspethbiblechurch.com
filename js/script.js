var returnedToTop = true;
var mediaQueriesOn = false;
$(window).on('scroll', function(){
  mediaQueriesOn = ($(window).width() <= 990)? true : false;

  if($(window).scrollTop() == 0 && !mediaQueriesOn){
    $('#navbar_id').css('background','transparent');
    $('.navbar-nav li a').removeClass('black-font-important').addClass('white-font-important');
    $('.navbar-brand img').css('display','none');
    returnedToTop = true;
  }
  if( ($(window).scrollTop() > 0 && returnedToTop) || mediaQueriesOn ){
    $('#navbar_id').css('background','white');
    $('.navbar-nav li a').removeClass('white-font-important').addClass('black-font-important').css('font-size','14');
    $('.navbar-brand img').css('display','initial');
    returnedToTop = false;
  }
});
