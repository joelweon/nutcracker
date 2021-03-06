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
            /*dv.appendChild(daumShoppingSearch.pongPgno(daumShopping.pgno, 
              z.channel.totalCount/daumShopping.result,daumShopping.pingSearch));*/
        },
        
        
        /** li setting **/
        getSearch : function(title,content){
            var l = document.createElement('div');
            
            /*li.style.height = '150px';*/
            l.appendChild(title);
            l.appendChild(content);
            //l.className += "swiper-slide";
            
            
            return l;
        },
        /** 설명 return **/
       getContent : function(z){
           var div = document.createElement('div');
           var a = document.createElement('a');
/*           var b = document.createElement('b');
           var ba1 = document.createElement('span');
           var ba2 = document.createElement('span');
           var ba3 = document.createElement('span');
           var ba4 = document.createElement('span');
           var ba5 = document.createElement('span');*/
           var img = document.createElement('img');
           var aimg = document.createElement('a');
           
           /*img.width = 100;
           img.height = 100;*/
           img.src = z.image_url;
           img.className += "right-image alta-image";
           img.style.padding = '10px 40px 40px 40px'
           img.style.borderRadius= '10px'
           
           //img.style.width = '170px';
                      
           aimg.target = '_blank';
           aimg.href = z.link;
           //aimg.style.float = 'left';
           
           aimg.appendChild(img);
           
           
/*           ba1.innerHTML = '가격 : ' 
                + z.price_min + '원 ~ ' + z.price_max + '원<br'+'/>';
           ba2.innerHTML = '제조사 : ' 
                + daumShoppingSearch.escapeHtml(z.maker) + '<br'+'/>';
           ba3.innerHTML = '브랜드 : ' 
             + daumShoppingSearch.escapeHtml(z.brand) + '<br'+'/>';
           ba4.innerHTML = '출시일 : ' 
                + daumShoppingSearch.escapeHtml(z.publish_date) + '<br'+'/>';
           ba5.innerHTML = '쇼핑몰명 : ' 
             + daumShoppingSearch.escapeHtml(z.shoppingmall) + '<br'+'/>';

           b.appendChild(ba1);
           b.appendChild(ba2);
           b.appendChild(ba3);
           b.appendChild(ba4);
           b.appendChild(ba5);*/
           
           div.appendChild(aimg);
           /*div.appendChild(b);*/
           /*div.appendChild(a);*/
                      
           return div;
       }
    };
