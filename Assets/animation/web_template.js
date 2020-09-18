$(document).ready(function trial(){
  let image_array = ["Assets/images/img9.jpg","Assets/images/img10.jpg","Assets/images/img11.jpg"];
  curentImageIndex = 0;
  setInterval(function(){
    console.log(image_array[curentImageIndex]);
    var p = $('.welcome-main');
    p.css("background-image","url("+image_array[curentImageIndex++] + ")",5000);
    if(curentImageIndex>= image_array.length){curentImageIndex = 0}
  }, 5000);

});
$(function(){
  $('.nav-panel').click(function(){
    $('#hiding').show();
  });

  $('#close').click(function(){
    $('.nav-panel').hide();
  });
});
