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
            li.appendChild(title);
            li.appendChild(content);
            
            return li;
        },
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
