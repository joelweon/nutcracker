1. MEMB
insert into memb(mno,email,name,pwd,path,lst_date) values(1,'admin@test.com','운영자',password('1111'),'admin.jpg','2017-02-17 18:09:12');
insert into memb(mno,email,name,pwd,path,lst_date) values(2,'user01@test.com','호호아줌마',password('1111'),'user01.jpg','2017-02-04 23:51:48');
insert into memb(mno,email,name,pwd,path,lst_date) values(3,'user02@test.com','몸살쟁이',password('1111'),'user02.jpg','2017-02-15 21:47:12');
insert into memb(mno,email,name,pwd,path,lst_date) values(4,'user03@test.com','강냉이',password('1111'),'user03.jpg','2017-02-08 14:56:22');
insert into memb(mno,email,name,pwd,path,lst_date) values(5,'user04@test.com','ppoouu',password('1111'),'user04.jpg','2017-02-09 16:35:32');
insert into memb(mno,email,name,pwd,path,lst_date) values(6,'user05@test.com','안간다이제퉤',password('1111'),'user05.jpg','2017-02-11 18:25:44');
insert into memb(mno,email,name,pwd,path,lst_date) values(7,'user06@test.com','이쁜이',password('1111'),'user06.jpg','2017-02-13 22:23:19');
insert into memb(mno,email,name,pwd,path,lst_date) values(8,'user07@test.com','사오정',password('1111'),'user07.jpg','2017-02-09 08:49:28');
insert into memb(mno,email,name,pwd,path,lst_date) values(9,'user08@test.com','superlovely',password('1111'),'user08.jpg','2017-02-01 17:05:39');
insert into memb(mno,email,name,pwd,path,lst_date) values(10,'user10@test.com','팽귄맨',password('1111'),'user09.jpg','2017-02-16 14:35:27');
insert into memb(mno,email,name,pwd,path,lst_date) values(11,'user11@test.com','아라샤',password('1111'),'user10.jpg','2016-12-17 20:07:46');
insert into memb(mno,email,name,pwd,path,lst_date) values(12,'user12@test.com','하양이',password('1111'),'user11.jpg','2016-07-24 06:24:41');
insert into memb(mno,email,name,pwd,path,lst_date) values(13,'user13@test.com','redblood',password('1111'),'user12.jpg','2016-09-20 23:08:16');
insert into memb(mno,email,name,pwd,path,lst_date) values(14,'user14@test.com','곰돌이푸우',password('1111'),'user13.jpg','2016-12-26 17:01:29');

2. USER
insert into user(uno,b_day,tel,bas_adr,det_adr,zip,gen,out_type,join_date) values(2,'1989-05-23','010-5489-5547','대전광역시 동구 대성2길 101','동성빌라 201호','34599','w','0','2017-02-08');
insert into user(uno,b_day,tel,gen,out_type,join_date) values(3,'1992-10-15','010-8895-1234','m','0','2016-04-13');
insert into user(uno,b_day,tel,job,gen,out_type,join_date) values(4,'1991-04-09','010-2469-6988','영양사','m','0','2016-11-24');
insert into user(uno,b_day,tel,job,out_type,join_date) values(5,'1986-03-20','010-1694-5124','사무직','0','2016-09-28');
insert into user(uno,b_day,tel,bas_adr,det_adr,zip,job,out_type,join_date) values(6,'1978-11-04','010-4512-1104','경기도 과천시 관문로 128','1011동 806호','13804','요리사','0','2015-12-17');
insert into user(uno,b_day,tel,bas_adr,det_adr,zip,out_type,join_date) values(7,'1991-12-27','010-3324-5831','서울특별시 강북구 삼각산로 47','105동 503호','01021','0','2015-08-06');
insert into user(uno,b_day,tel,out_type,join_date) values(8,'1987-10-16','010-1054-2677','0','2015-06-19');
insert into user(uno,b_day,tel,out_type,join_date) values(9,'1980-07-28','010-9485-0704','0','2016-07-04');
insert into user(uno,b_day,tel,out_type,join_date) values(10,'1983-02-07','010-1598-6363','0','2015-07-30');
insert into user(uno,b_day,tel,out_type,join_date) values(11,'1990-05-11','010-8544-1543','0','2016-04-24');
insert into user(uno,b_day,tel,out_type,join_date) values(12,'1988-06-23','010-4522-1542','1','2016-01-03');
insert into user(uno,b_day,tel,out_type,join_date) values(13,'1979-11-25','010-4139-5498','1','2015-07-16');
insert into user(uno,b_day,tel,out_type,out_cont,join_date) values(14,'1975-09-27','010-5447-1002','2','주기적으로 비방 게시글 생성','2016-02-14');

3. WISH
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(100,2,'남해수산 건미역 1kg','남해수산','11680','2500','wish01.jpg','http://www.nhmarket.kr/goods/content.asp?guid=2545297&cate=1105');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(101,2,'미역줄기볶음(200g)','몽촌반찬','2700','4000','wish02.jpg','http://www.mcfood.net/shop/shopdetail.html?branduid=20&search=%25B9%25CC%25BF%25AA%25C1%25D9%25B1%25E2&sort=&xcode=002&mcode=002&scode=001&GfDT=bmt1W1w%3D');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(102,3,'[청하간장게장] 간장게장','청하간장게장','78000','무료','wish03.jpg','http://chcrab.com/product/detail.html?product_no=17&cate_no=42&display_group=1');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(103,4,'광천 토굴 새우젓 1kg','맛군','14900','3000','wish04.jpg','http://storefarm.naver.com/mggfood/products/252141825?NaPm=ct%3Diz93e63c%7Cci%3Dad8dad47f7e7955e83700f11816315ecf5981477%7Ctr%3Dslsl%7Csn%3D239741%7Cic%3D%7Chk%3Dfe404dc97a53be168dfc92b20977f95a83772357');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(104,4,'쇼파패드 3인용 4인용','부창인터내셔널','26800','2500','wish05.jpg','http://storefarm.naver.com/contradnaz81/products/495758463?NaPm=ct%3Diz93jvc8%7Cci%3D9e75c561710c676eeeadb3990cdc43953e08297f%7Ctr%3Dslsl%7Csn%3D392126%7Cic%3D%7Chk%3D53b70a384500c4126fa907707bf341508fd24b54');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(105,4,'스위스밀리터리 스텐 보온도시락 470ml','스위스밀리터리','26900','2500','wish06.jpg','http://storefarm.naver.com/nicemom/products/304575463');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(106,4,'이롬 황성주 국산콩 두유 190mlX16팩','이롬','7280','2500','wish07.jpg','http://daisomall.co.kr/shop/goods_view.php?id=0001106871&ad_code=naver_shopping&NaPm=ct%3Diz94e8pc%7Cci%3D3a780b5d01b51c5b891ef42af857f93da639d3d4%7Ctr%3Dslc%7Csn%3D413413%7Chk%3D2cd92517a6ff0fb8296fdba1684a1435b78232be');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(107,5,'이든타운 오트밀 식사용 5kg','이든타운에프엔비','25500','2500','wish08.jpg','http://storefarm.naver.com/intofood/products/101415053?NaPm=ct%3Diz94gzgw%7Cci%3De2ba07479c7dd6eca1b175aac0e4e1ffd8538dc9%7Ctr%3Dslc%7Csn%3D165363%7Cic%3D%7Chk%3D82b0c887ec06d2dda7914ac4db15bb3f7ee99c5e');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(108,6,'국내산 녹미원 참 생와사비 100g','녹미원','3400','3000','wish09.jpg','http://storefarm.naver.com/goodsea/products/385656474?NaPm=ct%3Diz94kfp4%7Cci%3Ddd6a088c62f1d457ce5611812ca8ef702f67cdbd%7Ctr%3Dslsl%7Csn%3D273056%7Cic%3D%7Chk%3D9686c094a88aad79b39b248fa09f821bb276b856');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(109,6,'데체코 바질페스토 200g','데체코','5850','2500','wish10.jpg','http://itempage3.auction.co.kr/DetailView.aspx?ItemNo=B238238231&frm3=V2');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(110,7,'덴마크 인포켓치즈 200G(20G*10입)','(주)동원데어리푸드','9900','2500','wish11.jpg','http://www.lottesuper.co.kr/handler/goods/GoodsDetail?goods_no=1247660&sale_shop_sct_cd=01&sale_shop_id=&template_type_code=&disp_cat_no=1000300002');
insert into wish(wno,mno,pro_name,pro_comp,price,dev_pay,path,link) values(111,7,'아가프라 매직빨대컵 300ml','아가프라','6700','2500','wish12.jpg','http://storefarm.naver.com/bnpkorea/products/598430082?NaPm=ct%3Diz94y04g%7Cci%3Ddc478cb25cd1ce1bc5abaee99d1c7ba68d8122b4%7Ctr%3Dslc%7Csn%3D445387%7Cic%3D%7Chk%3De7cad63839c92c2c189856290a0cf4095c5be442');

4. PCH_HIST
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(2,400,'2017-02-21 19:08:47',2);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(2,402,'2017-02-28 14:51:16',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(3,401,'2017-02-19 21:42:37',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(3,403,'2017-02-19 21:42:37',3);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(3,404,'2017-02-27 17:26:43',2);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(4,402,'2017-03-20 22:14:20',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(5,400,'2017-02-18 12:38:53',4);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(5,403,'2017-02-27 07:09:39',2);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(6,401,'2017-03-01 20:07:16',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(7,404,'2017-03-21 14:06:58',4);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(7,400,'2017-03-12 13:57:04',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(8,402,'2017-03-17 16:28:49',5);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(8,403,'2017-02-22 19:48:05',2);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(8,404,'2017-03-11 18:07:50',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(9,404,'2017-03-16 11:54:09',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(10,402,'2017-03-07 10:08:08',3);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(10,404,'2017-03-09 15:24:38',1);
insert into pch_hist(mno,pno,pch_date,pch_cnt) values(11,400,'2017-03-04 15:42:19',3);

5. REVIEW
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(200,3,'2017-02-24 15:41:02','불매운동','홍삼액이 가짜 홍삼이라니요.','홍삼액이 가짜 홍삼이라니요-내용',73,32);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(201,4,'2017-02-01 19:28:49','불량후기','과자 먹다가 옥수수 털릴 뻔 했어요ㅠㅠ','불량후기 내용입니다',38,12);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(202,8,'2017-01-30 21:07:34','불량후기','나방나온다아 나바아앙~~~','불량후기 내용입니다',42,11);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(203,6,'2017-02-10 18:03:42','불량후기','혜화역식당, 역대급 불친절!!','불량후기 내용입니다',36,8);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(204,2,'2017-02-02 22:14:28','불매운동','존리는 무죄라네요ㅡㅡ','불량후기 내용입니다',143,57);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(205,7,'2017-02-10 14:37:54','불매운동','하기스 물티슈 판매중지한대요!!','불량후기 내용입니다',132,43);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(206,10,'2017-02-01 19:27:04','불매운동','남양유업 갑질..잊지맙시다!불매불매!','불량후기 내용입니다',98,41);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(207,10,'2017-02-14 22:19:54','불량후기','엄망진창 삼성동 미용실 후기입니다.','불량후기 내용입니다',52,19);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(208,11,'2016-12-10 21:38:05','불량후기','파리바게트 빵에서 나온 무언가...','불량후기 내용입니다',74,26);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(209,4,'2017-02-03 17:04:27','불매운동','제가 질소를 1500원에 샀네요?','불량후기 내용입니다',91,37);
insert into review(rvno,mno,rv_date,head,title,cont,view_cnt,hodu_cnt) values(210,8,'2017-02-03 13:47:24','불량후기','강남역 고깃집의 충격적인 점심특선!','불량후기 내용입니다',86,29);

6. REV_PHOT
insert into rev_phot(rpno,rvno,path) values(250,200,'reviw01.jpg');
insert into rev_phot(rpno,rvno,path) values(251,201,'reviw02.jpg');
insert into rev_phot(rpno,rvno,path) values(252,202,'reviw03.jpg');
insert into rev_phot(rpno,rvno,path) values(253,203,'reviw04.jpg');
insert into rev_phot(rpno,rvno,path) values(254,204,'reviw05.jpg');
insert into rev_phot(rpno,rvno,path) values(255,205,'reviw06.jpg');
insert into rev_phot(rpno,rvno,path) values(256,206,'reviw07.jpg');
insert into rev_phot(rpno,rvno,path) values(257,207,'reviw08.jpg');
insert into rev_phot(rpno,rvno,path) values(258,208,'reviw09.jpg');
insert into rev_phot(rpno,rvno,path) values(259,209,'reviw10.jpg');
insert into rev_phot(rpno,rvno,path) values(260,210,'reviw11.jpg');
