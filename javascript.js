let x = [0,0,0,0,0,0];
$('.triangle-others').click(function(e) {
  let element = $(e.target);
  let y = element.attr('id');
  if (y == 'zero') {y=0}
  else if (y == 'one') {y=1}
  else if (y == 'two') {y=2}
  else if (y == 'three') {y=3}
  else if (y == 'four') {y=4}
  else if (y == 'five') {y=5}
  let o = x[y];
  console.log(element);
  console.log(o);
  if (o == 0) {
    x[y] = 1;
    setTimeout(function() {
      element.parent().siblings('.triangle-out').css("border-bottom", "300px solid #f00");
    }, 1000);
    setTimeout(function() {
      element.siblings('.triangle-in').css("border-top", "0px solid rgb(249, 233, 183)");
      element.siblings('.paper').css("display", "block");
      element.siblings('.paper').css("transition", "1s");
    }, 1);
    setTimeout(function() {
      element.siblings('.paper').css("margin-top", "100px");
    }, 2200);
  }
  else if (o == 1) {
    x[y] = 0;
    element.parent().siblings('.overlay').css('display', 'flex');

  }

  $('.overlay').click(function() {
    // if ();
    $('.overlay').css('display', 'none');
    setTimeout(function() {
      element.parent().siblings('.triangle-out').css("border-bottom", "0px solid #f00");
    }, 1000);
    setTimeout(function() {
      element.siblings('.triangle-in').css("border-top", "300px solid rgb(249, 233, 183)");

    }, 2000);
    setTimeout(function() {
      element.siblings('.paper').css("margin-top", "150px");
      element.siblings('.triangle-in').css("transition", "1s ease-in");
      element.siblings('.triangle-out').css("transition", "1s ease-out");
    }, 1);
    setTimeout(function() {
      element.siblings('.paper').css("display", "none");
      element.siblings('.paper').css("transition", "0s");
    }, 3000);
  })
});
$('.img-button').click(function(e) {
  $('.overlay').css('display', 'none');
  $('.img-overlay').css('display', 'flex');
  console.log();
  let x = 'pics/' + $(e.target).parent().attr('id');
  $('.img').attr('src', x);
});
$('.img-overlay').click(function() {
  $('.img-overlay').css('display', 'none');
})
