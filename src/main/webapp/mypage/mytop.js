$(document).ready(function() {
  $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
  	$('#profile-photo').attr('src', clientRoot+'/images/user/'+ajaxResult.data.photoPath);
  	$('#profile-name').text(ajaxResult.data.name);
  	$('#re-email').attr('placeholder', ajaxResult.data.email);
  });
});

