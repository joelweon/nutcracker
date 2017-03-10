    var daumShoppingSearch = {
        /** 초기화. **/
        init : function(){
            this.apikey = "7a03f2ccbc4a1f5b6f74ea1cd48ec6e0";
            this.q = document.getElementById('daumShoppingSearch');
            
            //검색 객체들 초기화.
            daumShopping.init(20);
        },
        /** 검색 **/
        search : function(){
            this.query = '?apikey=' + this.apikey + '&output=json&q=' 
                + encodeURI(this.q.value);
            
            //검색어에 맞게 각각 첫페이지를 띄움.
            daumShopping.pingSearch(1);
        },
        /** callback 함수 호출. **/
        pingSearch : function(ds, api, pgno, callback, result){
            ds.innerHTML = "";
            
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.charset = 'utf-8';
            s.src = api + this.query + '&pageno=' + pgno + '&callback=' 
                + callback + '&result='+result ; 
            
            ds.appendChild(s);
            
        },
        /** 결과를 뿌려줌. **/
        pongSearch : function(search, z){
            var ul = document.createElement('ul');
            
            for(var i=0; i<z.channel.item.length; i++){
                //title 정보를 얻음.
                var title = document.createElement('h4');
                var a = document.createElement('a');
                a.href = z.channel.item[i].link;
                a.target = '_blank';
                a.innerHTML = this.escapeHtml(z.channel.item[i].title) 
                    + '<br'+'/>';
                a.className += 'name';

                title.appendChild(a);
                
                //세부 내용을 얻음.
                var content = search.getContent(z.channel.item[i]);
                
                //리스트 화.
                ul.appendChild(search.getSearch(title,content));
            }

            return ul;
        },
        /** PageNumber를 그려줌. **/
        pongPgno : function(pgno,max,func){
            var maxpg = (pgno+5<max)?pgno+5:max;
            
            var div = document.createElement('div');
            div.align = 'center';
            div.style.clear = 'left'; 
            
            //좌측 화살표.
            var left = document.createElement('a');
            left.innerHTML = "<< ";
            if(pgno-5>1)
                this.onMouseDown(left,pgno-5,func);
            else{
                left.style.color = "gray";
                left.style.cursor = "default";
            }
            div.appendChild(left);
            
            //페이지 번호.
            for(var i=(pgno-5>1)?pgno-5:1; i<maxpg; i++){
                var a = document.createElement('a');
                a.innerHTML = " " + i + " ";

                if(i==pgno){
                    a.style.color = 'purple';
                    a.style.cursor = "default";
                }
                else
                    this.onMouseDown(a,i,func);
                
                div.appendChild(a);
            }
            
            //우측 화살표.
            var right = document.createElement('a');
            right.innerHTML = ">> ";
            if(pgno+5<max)
                this.onMouseDown(right,pgno+7,func);
            else{
                right.style.color = "gray";
                right.style.cursor = "default";
            }
            div.appendChild(right);
            
            return div;
        },
        /** 마우스 이벤트. **/
        onMouseDown: function(a, i, func){
            a.style.cursor = 'pointer';
            a.onmousedown = function(){
                func(i);
            }
        },
        /** HTML태그 안 먹게 하는 함수 **/
        escapeHtml: function (str) {
            str = str.replace(/&amp;/g, "&");
            str = str.replace(/&lt;/g, "<");
            str = str.replace(/&gt;/g, ">");
            return str;
        }
    };
    window.onload = function () {
        daumShoppingSearch.init();
        /*daumShoppingSearch.search();*/
    };
    
var cli = function(e) {
    var users = window.sessionStorage.getItem('user');
    var param = {
      photoPath   : $(event.target).closest('li').find('img').attr('src'),
      productName : ($(event.target).closest('li').find('.name').text()),
      maker       : ($(event.target).closest('li').find('.maker').text()).substring(6),
      brand       : ($(event.target).closest('li').find('.brand').text()).substring(6),
      price       : ($(event.target).closest('li').find('.price').text()).substring(6),
      link        : $(event.target).closest('li').find('.name').attr('href'),
      memberNo    : JSON.parse(users).memberNo
    };
    //console.log(param);
    
    $.get(serverRoot + '/mypage/myWishListAdd.json', param, function(ajaxResult) {
      if (ajaxResult.status != "success") {
        console.log(ajaxResult.data);
        return;
      }
      alertify.alert("담기완료!");
    });
  
}
