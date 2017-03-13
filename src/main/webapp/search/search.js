try {
  var params = location.href.split('?')[1];
  var keyword = decodeURI(params.split('=')[1]);
} catch (error) {
  var keyword = "error"; // 현재페이지
}

doBoycottSearch(keyword);

function doBoycottSearch(keyword) {
  $('span#keyword').text('\'' + keyword + '\' ');
  $.get(serverRoot + '/boycott/search.json?keyword=' + keyword, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[boycott/search] 검색 실패하였습니다.');
      return;
    }
    var divBoycott = $('div#wrap-boycott');
    var boycottLen = ajaxResult.data.length;
    if (boycottLen != 0) {
      var template = Handlebars.compile($('#boycottTemplate').html());
      divBoycott.html(template({"boycottList" : ajaxResult.data}));
      $('span#boycottCnt').text(' (' + ajaxResult.data.length + '건)');
    } else {
      divBoycott.html('<p>검색 결과가 없습니다.</p>');
      $('span#boycottCnt').text(' (0건)');
    }
    if (boycottLen < 3) {
      $('a#boycottVM').css('display', 'none');
    } else {
      $('a#boycottVM').css('display', 'block');
    }
    
    doReviewSearch(keyword);
  });
}

function doReviewSearch(keyword) {
  $.get(serverRoot + '/review/search.json', {
    "pageNo" : 0,
    "pageSize" : 10,
    "range" : '제목+내용',
    "keyword" : keyword
  }, function(ajaxResult) {
    if(ajaxResult.status != 'success') {
      console.log('[review/search] 검색 실패하였습니다.');
      return;
    }
    var divReview = $('div#wrap-review');
    var reviewLen = ajaxResult.data.totalCount;
    if (reviewLen != 0) {
      var template = Handlebars.compile($('#reviewTemplate').html());
      divReview.html(template({"reviewList" : ajaxResult.data.list}));
      $('span#reviewCnt').text(' (' + ajaxResult.data.totalCount + '건)');
    } else {
      divReview.html('<p>검색 결과가 없습니다.</p>');
      $('span#reviewCnt').text(' (0건)');
    }
    if (reviewLen < 3) {
      $('a#reviewVM').css('display', 'none');
    } else {
      $('a#reviewVM').css('display', 'display');
    }
  });
  
  doSearchPurchase(keyword);
}

function doSearchPurchase(keyword) {
  $('span#keyword').text('\'' + keyword + '\' ');
  $.get(serverRoot + '/purchs/search.json?keyword=' + keyword, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[purchs/search] 검색 실패하였습니다.');
      return;
    }
    var divPurchs = $('div#wrap-purchs');
    var purchsLen = ajaxResult.data.length;
    if (purchsLen != 0) {
      var template = Handlebars.compile($('#purchsTemplate').html());
      divPurchs.html(template({"purchsList" : ajaxResult.data}));
      $('span#purchsCnt').text(' (' + ajaxResult.data.length + '건)');
    } else {
      divPurchs.html('<p>검색 결과가 없습니다.</p>');
      $('span#purchsCnt').text(' (0건)');
    }
    if (purchsLen < 3) {
      $('a#purchsVM').css('display', 'none');
    } else {
      $('a#purchsVM').css('display', 'block');
    }
  });
}