prepareForm();

function prepareForm() {
  console.log("prepareForm()...");
  getCompany();  
}

function getCompany() {
  console.log("getCompany()...");
  $.get(serverRoot + '/company/getParents.json', function(ajaxResult) {
    if (ajaxResult != 'success') {
      console.log(ajaxResult.data);
      return;
    }
    var parents = ajaxResult.data.array;
    console.log(parents);
  });
}
