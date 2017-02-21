$( function() {
  $( ".datepicker" ).datepicker();
  
  var cnt = 2;
  $('a#add-photo').click(function (event) {
    if (cnt < 4) {
      var wrapdiv = $('#div-photo1').clone(true);
      $('#wrap-photo').append(wrapdiv.attr('id', 'div-photo'+ cnt));
      cnt++;
    }
  });
  $('a#remove-photo').click(function (event) {
    console.log("cnt=" + cnt);
    if (cnt > 2) {
      var el = '#div-photo' + (cnt - 1);
      $(el).remove();
      cnt--;
    }
  });
} );