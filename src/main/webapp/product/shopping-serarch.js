    /** 쇼핑 검색. **/
    var daumShopping = {
        /** 초기화. **/
        init : function(r){
            daumShopping.api = 'http://apis.daum.net/shopping/search';
            daumShopping.pgno = 1;
            daumShopping.result = r;
        },
        /** callback 함수 호출. **/
        pingSearch : function(pgno){
            daumShopping.pgno = pgno;
            
            var ds = document.getElementById('daumShoppingScript');
            var callback = 'daumShopping.pongSearch';
            
            daumShoppingSearch.pingSearch(ds,daumShopping.api, 
                daumShopping.pgno, callback, daumShopping.result);  
        },
        /** 결과를 뿌려줌. **/
        pongSearch : function(z){
            var dv = document.getElementById('daumShopping');
            dv.innerHTML ="";
            dv.appendChild(daumShoppingSearch.pongSearch(this, z));
            dv.appendChild(daumShoppingSearch.pongPgno(daumShopping.pgno, 
              z.channel.totalCount/daumShopping.result,daumShopping.pingSearch));
        },
        
        /** li setting **/
        getSearch : function(title,content){
          var li = document.createElement('li');
            
          /*li.style.height = '150px';*/
          /*li.appendChild(title);
          li.appendChild(content);*/
          //console.log('[shopping-serach.js] title:' + title + ', content: ' + content);
          var checkStr = $(title).find('.name').text().replace('"','') + " "
            + $(content).find('.maker').text().split(':')[1] + " "
            + $(content).find('.brand').text().split(':')[1];
          //console.log(checkStr);
          
          var divBlock = document.createElement('div');
          divBlock.className = 'blocked';
          
          var logo = document.createElement('img');
          logo.setAttribute('src', clientRoot + '/images/boycott.png');
          
          /*var span = document.createElement('p');
          span.className = 'blockMsg';
          span.append(document.createTextNode('불매기업 제품입니다.'));*/
          
          var moveArticle = document.createElement('a');
          moveArticle.className = 'moveArticle btn';
          moveArticle.setAttribute('type', 'button');
          moveArticle.setAttribute('target', "_blank");
          moveArticle.append(document.createTextNode('관련글 보기'));
          
          var moveProd = document.createElement('a');
          moveProd.className = 'moveProd btn';
          moveProd.setAttribute('type', 'button');
          moveProd.setAttribute('target', "_blank");
          moveProd.setAttribute('href', $(title).find('.name').attr('href'));
          moveProd.append(document.createTextNode('제품 상세보기'));
          
          divBlock.append(logo);
          divBlock.append(document.createElement('br'));
          /*divBlock.append(span);
          divBlock.append(document.createElement('br'));*/
          divBlock.append(moveArticle);
          divBlock.append(moveProd);
          
          
          for (var i = 0; i < allBoycottNames.length; i++) {
            if (checkStr.indexOf(allBoycottNames[i].split(',')[1]) != -1) {
              console.log('namesA:' + allBoycottNames[i]);
              moveArticle.setAttribute('href', '/nutcracker/detail/detail.html?boycottNo=' + allBoycottNames[i].split(',')[0]);
              li.append(divBlock);
            }
          }

          for (var i = 0; i < myBoycottNames.length; i++) {
            if (checkStr.indexOf(myBoycottNames[i].split(',')[1]) != -1) {
              console.log('namesM:' + allBoycottNames[i]);
              moveArticle.setAttribute('href', '/nutcracker/detail/detail.html?boycottNo=' + myBoycottNames[i].split(',')[0]);
              li.append(divBlock);
            }
          }
          var space = document.createElement('h5');
          space.className = 'space';
          li.appendChild(space);
          li.appendChild(title);
          li.appendChild(content);
          return li;
        },
        /*getBoycottList : function() {
          console.log('[getBoycottList] 호출...');
          if ($('#allCheck').hasClass('switchon')) {
            var boycottNameList = productSearch.getAllBoycott();
            return boycottNameList;
          } else return;
        },*/
        /** 설명 return **/
       getContent : function(z){
           var div = document.createElement('div');
           var a = document.createElement('a');
           var b = document.createElement('b');
           var ba1 = document.createElement('span');
           var ba2 = document.createElement('span');
           var ba3 = document.createElement('span');
           var ba4 = document.createElement('span');
           var ba5 = document.createElement('span');
           var ba6 = document.createElement('button');
           var img = document.createElement('img');
           var aimg = document.createElement('b');
           
           /*img.width = 100;
           img.height = 100;*/
           img.src = z.image_url;
           /*img.style.paddingRight = '20px';*/
                      
           aimg.target = '_blank';
           aimg.href = z.link;
           aimg.style.float = 'left';
           
           aimg.appendChild(img);
           img.className += "pic";
           
           
           ba1.innerHTML = '가격 : ' 
               + z.price_min + '원 ~ ' + z.price_max + '원<br'+'/>';
           ba2.innerHTML = '제조사 : '
               + daumShoppingSearch.escapeHtml(z.maker) + '<br'+'/>';
           ba3.innerHTML = '브랜드 : '
               + daumShoppingSearch.escapeHtml(z.brand) + '<br'+'/>';
           ba4.innerHTML = '출시일 : '
               + daumShoppingSearch.escapeHtml(z.publish_date) + '<br'+'/>';
           ba5.innerHTML = '쇼핑몰명 : '
               + daumShoppingSearch.escapeHtml(z.shoppingmall) + '<br'+'/>';
           
           
           ba6.className = "wish";
           ba6.className += " btn btn-danger btn-s";
           ba6.innerHTML = '위시리스트 추가';
           ba6.setAttribute('onclick','javascript:cli()');
           
           ba1.className += "price";
           ba2.className += "maker";
           ba3.className += "brand";
           ba4.className += "publish-date";
           ba5.className += "shoppingmall";

           b.appendChild(ba1);
           b.appendChild(ba2);
           b.appendChild(ba3);
           b.appendChild(ba4);
           b.appendChild(ba5);
           
           div.appendChild(aimg);
           div.appendChild(b);
           div.appendChild(a);
           div.appendChild(ba6);

           return div;
       }
    };
