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
    var boycottList = ajaxResult.data;
    var displayList = [];
    if (boycottLen != 0) {
      if (boycottLen < 3) {
        $('a#boycottVM').css('display', 'none');
        displayList = boycottList;
      } else {
        $('a#boycottVM').css('display', 'block');
        displayList[0] = boycottList[0];
        displayList[1] = boycottList[1];
        displayList[2] = boycottList[2];
      }
      var template = Handlebars.compile($('#boycottTemplate').html());
      divBoycott.html(template({"boycottList" : displayList}));
      $('span#boycottCnt').text(' (' + boycottLen + '건)');
    } else {
      divBoycott.html('<p>검색 결과가 없습니다.</p>');
      $('span#boycottCnt').text(' (0건)');
      $('a#boycottVM').css('display', 'none');
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
    var reviewList = ajaxResult.data.list;
    var displayList = [];
    if (reviewLen != 0) {
      if (reviewLen < 3) {
        $('a#reviewVM').css('display', 'none');
        displayList = reviewList;
      } else {
        $('a#reviewVM').css('display', 'display');
        displayList[0] = reviewList[0];
        displayList[1] = reviewList[1];
        displayList[2] = reviewList[2];
      }
      var template = Handlebars.compile($('#reviewTemplate').html());
      divReview.html(template({"reviewList" : displayList}));
      $('span#reviewCnt').text(' (' + reviewLen + '건)');
    } else {
      divReview.html('<p>검색 결과가 없습니다.</p>');
      $('span#reviewCnt').text(' (0건)');
      $('a#reviewVM').css('display', 'none');
    }
  });
  
  doSearchPurchase(keyword);
}

function doSearchPurchase(keyword) {
  $('span#keyword').text('\'' + keyword + '\' ');
  $.get(serverRoot + '/deal/searchDeal.json?keyword=' + keyword, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[purchs/search] 검색 실패하였습니다.');
      return;
    }
    var divPurchs = $('div#wrap-purchs');
    var purchsLen = ajaxResult.data.length;
    var purchsList = ajaxResult.data;
    var displayList = [];
    if (purchsLen != 0) {
      if (purchsLen < 3) {
        $('a#purchsVM').css('display', 'none');
        displayList = purchsList;
      } else {
        $('a#purchsVM').css('display', 'block');
        displayList[0] = purchsList[0];
        displayList[1] = purchsList[1];
        displayList[2] = purchsList[2];
      }
      var template = Handlebars.compile($('#purchsTemplate').html());
      divPurchs.html(template({"purchsList" : displayList}));
      $('span#purchsCnt').text(' (' + purchsLen + '건)');
    } else {
      divPurchs.html('<p>검색 결과가 없습니다.</p>');
      $('span#purchsCnt').text(' (0건)');
      $('a#purchsVM').css('display', 'none');
    }
  });
}