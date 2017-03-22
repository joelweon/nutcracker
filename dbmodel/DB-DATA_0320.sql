-- 1. MEMB
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

-- 2. USER
insert into user(uno,b_day,tel,out_type,join_date) values(1,'1991-09-02','01011112222','0','2015-09-02');
insert into user(uno,b_day,tel,bas_adr,det_adr,zip,gen,out_type,join_date) values(2,'1989-05-23','01054895547','대전광역시 동구 대성2길 101','동성빌라 201호','34599','w','0','2017-02-08');
insert into user(uno,b_day,tel,gen,out_type,join_date) values(3,'1992-10-15','01088951234','m','0','2016-04-13');
insert into user(uno,b_day,tel,job,gen,out_type,join_date) values(4,'1991-04-09','01024696988','영양사','m','0','2016-11-24');
insert into user(uno,b_day,tel,job,out_type,join_date) values(5,'1986-03-20','01016945124','사무직','0','2016-09-28');
insert into user(uno,b_day,tel,bas_adr,det_adr,zip,job,out_type,join_date) values(6,'1978-11-04','01045121104','경기도 과천시 관문로 128','1011동 806호','13804','요리사','0','2015-12-17');
insert into user(uno,b_day,tel,bas_adr,det_adr,zip,out_type,join_date) values(7,'1991-12-27','01033245831','서울특별시 강북구 삼각산로 47','105동 503호','01021','0','2015-08-06');
insert into user(uno,b_day,tel,out_type,join_date) values(8,'1987-10-16','01010542677','0','2015-06-19');
insert into user(uno,b_day,tel,out_type,join_date) values(9,'1980-07-28','01094850704','0','2016-07-04');
insert into user(uno,b_day,tel,out_type,join_date) values(10,'1983-02-07','01015986363','0','2015-07-30');
insert into user(uno,b_day,tel,out_type,join_date) values(11,'1990-05-11','01085441543','0','2016-04-24');
insert into user(uno,b_day,tel,out_type,join_date) values(12,'1988-06-23','01045221542','1','2016-01-03');
insert into user(uno,b_day,tel,out_type,join_date) values(13,'1979-11-25','01041395498','1','2015-07-16');
insert into user(uno,b_day,tel,out_type,out_cont,join_date) values(14,'1975-09-27','01054471002','2','주기적인 비방 게시글 작성','2016-02-14');

-- 3. WISH
insert into wish(wno,mno,pro_name,brand,price,path,link) values(100,2,'남해수산 건미역 1kg','남해 수산','11680','wish01.jpg','http://www.nhmarket.kr/goods/content.asp?guid=2545297&cate=1105');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(101,2,'미역줄기볶음(200g)','몽촌반찬','2700','wish02.jpg','http://www.mcfood.net/shop/shopdetail.html?branduid=20&search=%25B9%25CC%25BF%25AA%25C1%25D9%25B1%25E2&sort=&xcode=002&mcode=002&scode=001&GfDT=bmt1W1w%3D');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(102,3,'[청하간장게장] 간장게장','청하간장게장','78000','wish03.jpg','http://chcrab.com/product/detail.html?product_no=17&cate_no=42&display_group=1');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(103,4,'광천 토굴 새우젓 1kg','맛군','14900','wish04.jpg','http://storefarm.naver.com/mggfood/products/252141825?NaPm=ct%3Diz93e63c%7Cci%3Dad8dad47f7e7955e83700f11816315ecf5981477%7Ctr%3Dslsl%7Csn%3D239741%7Cic%3D%7Chk%3Dfe404dc97a53be168dfc92b20977f95a83772357');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(104,4,'쇼파패드 3인용 4인용','부창인터내셔널','26800','wish05.jpg','http://storefarm.naver.com/contradnaz81/products/495758463?NaPm=ct%3Diz93jvc8%7Cci%3D9e75c561710c676eeeadb3990cdc43953e08297f%7Ctr%3Dslsl%7Csn%3D392126%7Cic%3D%7Chk%3D53b70a384500c4126fa907707bf341508fd24b54');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(105,4,'스위스밀리터리 스텐 보온도시락 470ml','스위스밀리터리','26900','wish06.jpg','http://storefarm.naver.com/nicemom/products/304575463');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(106,4,'이롬 황성주 국산콩 두유 190mlX16팩','이롬','7280','wish07.jpg','http://daisomall.co.kr/shop/goods_view.php?id=0001106871&ad_code=naver_shopping&NaPm=ct%3Diz94e8pc%7Cci%3D3a780b5d01b51c5b891ef42af857f93da639d3d4%7Ctr%3Dslc%7Csn%3D413413%7Chk%3D2cd92517a6ff0fb8296fdba1684a1435b78232be');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(107,5,'이든타운 오트밀 식사용 5kg','이든타운에프엔비','25500','wish08.jpg','http://storefarm.naver.com/intofood/products/101415053?NaPm=ct%3Diz94gzgw%7Cci%3De2ba07479c7dd6eca1b175aac0e4e1ffd8538dc9%7Ctr%3Dslc%7Csn%3D165363%7Cic%3D%7Chk%3D82b0c887ec06d2dda7914ac4db15bb3f7ee99c5e');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(108,6,'국내산 녹미원 참 생와사비 100g','녹미원','3400','wish09.jpg','http://storefarm.naver.com/goodsea/products/385656474?NaPm=ct%3Diz94kfp4%7Cci%3Ddd6a088c62f1d457ce5611812ca8ef702f67cdbd%7Ctr%3Dslsl%7Csn%3D273056%7Cic%3D%7Chk%3D9686c094a88aad79b39b248fa09f821bb276b856');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(109,6,'데체코 바질페스토 200g','데체코','5850','wish10.jpg','http://itempage3.auction.co.kr/DetailView.aspx?ItemNo=B238238231&frm3=V2');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(110,7,'덴마크 인포켓치즈 200G(20G*10입)','(주)동원데어리푸드','9900','wish11.jpg','http://www.lottesuper.co.kr/handler/goods/GoodsDetail?goods_no=1247660&sale_shop_sct_cd=01&sale_shop_id=&template_type_code=&disp_cat_no=1000300002');
insert into wish(wno,mno,pro_name,brand,price,path,link) values(111,7,'아가프라 매직빨대컵 300ml','아가프라','6700','wish12.jpg','http://storefarm.naver.com/bnpkorea/products/598430082?NaPm=ct%3Diz94y04g%7Cci%3Ddc478cb25cd1ce1bc5abaee99d1c7ba68d8122b4%7Ctr%3Dslc%7Csn%3D445387%7Cic%3D%7Chk%3De7cad63839c92c2c189856290a0cf4095c5be442');

-- 기업정보 -----------------------------------
-- 옥시
insert into comp(cpno,cp_name,parno,lvl) 
    values(500,'옥시레킷벤키저',500,0);
-- 유한
insert into comp(cpno,cp_name,parno,lvl) 
    values(501,'유한양행',501,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(502,'유한킴벌리',501,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(503,'유한화학',501,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(504,'유한메디카',501,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(505,'유한크로락스',501,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(506,'한국얀센',501,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(507,'엔솔테크',501,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(508,'유칼릭스',501,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(509,'엠지',501,1);
-- 신세계
insert into comp(cpno,cp_name,parno,lvl) 
    values(510,'신세계',510,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(511,'신세계건설',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(512,'이마트',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(513,'신세계백화점',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(514,'신세계아이앤씨',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(515,'광주신세계',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(516,'신세계푸드',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(517,'스타벅스코리아',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(518,'신세계인터네셔널',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(519,'조선호텔베이커리',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(520,'신세계조선호텔',510,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(521,'신세계첼시',510,1);
-- 아모레퍼시픽
insert into comp(cpno,cp_name,parno,lvl) 
    values(522,'아모레퍼시픽',522,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(523,'아리따움',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(524,'라네즈',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(525,'마몽드',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(526,'아이오페',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(527,'롤리타램피카',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(528,'아닉구딸',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(529,'한율',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(530,'헤라',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(531,'설화수',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(532,'리리코스',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(533,'프리메라',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(534,'이니스프리',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(535,'베리떼',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(536,'에뛰드',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(537,'롤리타렘피카향수',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(538,'에스쁘아',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(539,'려',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(540,'일리',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(541,'미쟝센',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(542,'해피바스',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(543,'댄트롤샴푸',522,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(544,'송염치약',522,1);
-- 피앤지
insert into comp(cpno,cp_name,parno,lvl) 
    values(545,'피앤지',545,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(546,'페브리즈',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(547,'다우니',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(548,'에리얼',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(549,'팬틴',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(550,'헤드앤숄더',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(551,'위스퍼',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(552,'브라운',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(553,'질레트',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(554,'듀라셀',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(555,'SK2',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(556,'오랄비',545,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(557,'팸퍼스',545,1);
-- 위메프
insert into comp(cpno,cp_name,parno,lvl) 
    values(558,'위메프',588,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(559,'원더윅스',558,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(560,'너브',558,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(561,'I-Shoplog',558,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(562,'원더홀딩스',558,1);
-- 매일유업
insert into comp(cpno,cp_name,parno,lvl) 
    values(563,'매일유업',563,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(564,'엠즈씨드',563,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(565,'레뱅드매일',563,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(566,'본만제',563,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(567,'엠즈베버리지',563,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(568,'엠즈푸드시스템',563,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(569,'상하농원',563,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(570,'코리아후드써비스',563,1);
-- 남양유업
insert into comp(cpno,cp_name,parno,lvl) 
    values(571,'남양유업',571,0);
-- lg
insert into comp(cpno,cp_name,parno,lvl) 
    values(572,'LG',572,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(573,'LG디스플레이',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(574,'LG이노텍',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(575,'이노싱크',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(576,'하이로지스틱스',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(577,'씨텍',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(578,'코카콜라음료',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(579,'해태HTB',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(580,'더페이스샵',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(581,'LG-TOSTEM',572,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(582,'LG경제연구원',572,1);
-- 몽드드
insert into comp(cpno,cp_name,parno,lvl) 
    values(583,'몽드드',583,0);
-- 동서식품
insert into comp(cpno,cp_name,parno,lvl) 
    values(584,'동서식품',584,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(585,'맥심',584,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(586,'포스트',584,1);
-- 롯데제과
insert into comp(cpno,cp_name,parno,lvl) 
    values(587,'롯데제과',587,0);
-- 농심
insert into comp(cpno,cp_name,parno,lvl) 
    values(588,'농심',588,0);
insert into comp(cpno,cp_name,parno,lvl) 
    values(589,'농심홀딩스',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(590,'율촌화학',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(591,'메가마트',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(592,'태경농산',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(593,'농심기획',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(594,'호텔농심',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(595,'엔디에스',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(596,'농심캐피탈',588,1);
insert into comp(cpno,cp_name,parno,lvl) 
    values(597,'농심엔지니어링',588,1);


-- 불매기업관계
insert into bot_rls(mno,cpno,reg_date)
    values(2,500,'2017-02-17');
insert into bot_rls(mno,cpno,reg_date)
    values(2,512,'2017-02-19');
insert into bot_rls(mno,cpno,reg_date)
    values(2,524,'2017-02-17');
insert into bot_rls(mno,cpno,reg_date)
    values(3,538,'2017-02-17');
insert into bot_rls(mno,cpno,reg_date)
    values(4,542,'2017-02-17');
insert into bot_rls(mno,cpno,reg_date)
    values(5,571,'2017-02-20');
insert into bot_rls(mno,cpno,reg_date)
    values(7,558,'2017-02-17');
insert into bot_rls(mno,cpno,reg_date)
    values(8,545,'2017-03-17');
insert into bot_rls(mno,cpno,reg_date)
    values(8,563,'2017-01-17');
insert into bot_rls(mno,cpno,reg_date)
    values(9,558,'2017-02-10');
insert into bot_rls(mno,cpno,reg_date)
    values(11,583,'2017-02-24');




-- 공동구매
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(400,500,'바른두유 플레인 진한영양 20개입',29000,'2017-02-23','2017-03-16','2017-03-18',50,50);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(401,500,'나래농장 내몸에 착한 100% 홍삼액',71000,'2017-02-15','2017-03-16','2017-03-18',50,30);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(402,501,'순둥이 베이직 무향 물티슈 80매',10000,'2017-02-18','2017-03-28','2017-03-30',50,30);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt) 
    values(403,502,'킨도 프리미엄 기저귀 대형 48매',16000,'2017-02-24','2017-03-24','2017-03-26',50);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(404,503,'락앤락 별자리 텀블러 400ml',12120,'2017-03-10','2017-03-20','2017-03-22',50,10);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(405,500,'듀플렉스 초음파식 가습기',14710,'2017-03-22','2017-03-28','2017-03-30',50,15);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(406,500,'삼성전자 갤럭시 노트5 32GB',799800,'2017-03-01','2017-03-16','2017-03-18',50,30);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(407,501,'보솜이 프리미엄 천연코튼(밴드/팬티) 4팩',32940,'2017-02-18','2017-03-28','2017-03-30',50,30);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt) 
    values(408,502,'LG생활건강 샤프란 케어 섬유 탈취제',10000,'2017-02-24','2017-03-24','2017-03-26',50);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,api_cnt) 
    values(409,503,'매일유업 요미요미 유기농 쌀과자',2450,'2017-02-20','2017-03-20','2017-03-22',50,40);


-- 공동구매사진
insert into pch_phot(ppno,pno,path) 
    values(450,400,'../images/barun.png');
insert into pch_phot(ppno,pno,path) 
    values(451,401,'../images/nare.png');
insert into pch_phot(ppno,pno,path) 
    values(452,402,'../images/sundung.png');
insert into pch_phot(ppno,pno,path) 
    values(453,403,'../images/kindoh.png');
insert into pch_phot(ppno,pno,path) 
    values(454,404,'../images/product/tum.jpg');
insert into pch_phot(ppno,pno,path) 
    values(455,405,'../images/product/ga.jpg');
insert into pch_phot(ppno,pno,path) 
    values(456,406,'../images/product/not5.jpg');
insert into pch_phot(ppno,pno,path) 
    values(457,407,'../images/product/bo.jpg');
insert into pch_phot(ppno,pno,path) 
    values(458,408,'../images/product/sha.jpg');
insert into pch_phot(ppno,pno,path) 
    values(459,409,'../images/product/ssal.jpg');



--  PCH_HIST
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

--  REVIEW
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(200,3,'2017-02-24 15:41:02','불매운동','홍삼액이 가짜 홍삼이라니요.','홍삼액이 가짜 홍삼이라니요-내용','default',78,34,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(201,4,'2017-02-01 19:28:49','불량후기','과자 먹다가 옥수수 털릴 뻔 했어요ㅠㅠ','불량후기 내용입니다','default',59,24,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(202,8,'2017-01-30 21:07:34','불량후기','나방나온다아 나바아앙~~~','불량후기 내용입니다','default',54,19,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(203,6,'2017-02-10 18:03:42','불량후기','혜화역식당, 역대급 불친절!!','불량후기 내용입니다','default',38,9,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(204,2,'2017-02-02 22:14:28','불매운동','존리는 무죄라네요ㅡㅡ','불량후기 내용입니다','default',84,41,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(205,7,'2017-02-10 14:37:54','불매운동','하기스 물티슈 판매중지한대요!!','불량후기 내용입니다','default',93,46,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(206,10,'2017-02-01 19:27:04','불매운동','남양유업 갑질..잊지맙시다!불매불매!','불량후기 내용입니다','default',87,37,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(207,10,'2017-02-14 22:19:54','불량후기','엄망진창 삼성동 미용실 후기입니다.','불량후기 내용입니다','default',61,13,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(208,11,'2016-12-10 21:38:05','불량후기','파리바게트 빵에서 나온 무언가...','불량후기 내용입니다','default',79,42,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(209,4,'2017-02-03 17:04:27','불매운동','제가 질소를 1500원에 샀네요?','불량후기 내용입니다','default',97,43,0,'n');
insert into review(rvno,mno,rv_date,head,title,cont,path,view_cnt,hodu_cnt,rep_cnt,del_yn) values(210,8,'2017-02-03 13:47:24','불량후기','강남역 고깃집의 충격적인 점심특선!','불량후기 내용입니다','default',51,20,0,'n');


-- 불매운동 --
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(300, 500, '2017-02-08','옥시레킷벤키저 가습기 살균제 사건','최근 논란이 되고있는 가습기 살균제 사건입니다',0,0,2,0,0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(301, 502, '2017-02-09', '유한킴벌리 물티슈 유독물질 과다검출', '유한킴벌리가 제조·생산한 일부 물티슈에서 허용기준치를 초과한 메탄올이 검출됐다.', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(302, 557, '2017-02-10', '독성물질 논란 팸퍼스 귀저기 판매 중단', '한국 피앤지(P&G)가 국내에서 유통하는 수입 기저귀 일부 품목에서 화학 물질이 검출됐다는 해외 언론 보도가 나와 논란이 일고 있다', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(303, 522, '2017-02-11', '메디안 독소 성분 검출', '아모레 메디안후레쉬포레스트치약 등 치약 11종에  가습기 살균제 독성물질이 사용됐다.', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(304, 547, '2017-02-12', '다우니 유독물질 과다검출', '한국P&G가 수입·판매하고 있는 섬유유연제 다우니에서 유독물질이 검출됐다. ', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(305, 558, '2017-02-13', '위메프 채용 갑질논란', '소셜커머스 기업 위메프가 수습사원 11명을 최종합격 불합격 시켜 논란이 되고있다.', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(306, 584, '2017-02-14', '동서식품 대장균 시리얼 판매 논란', '동서식품이 판매중인 시리얼 중 일부제품에서 대장균이 검출된 사실을 알고도 폐기하지 않고 제품을 섞어 완제품을 많들어 유동시켰다 적발되었다.', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(307, 571, '2017-02-15', '남양유업 갑질횡포', '남양유업에서 지역대리점에 물건을 밀어내기(강매)를 한다는 것이 적발되었다.', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(308, 587, '2017-02-16', '롯데제과 락스 초코바', '악취와 이상한 맛이 나 전량 수거된 롯데제과 초코바 에서 락스 성분이 검출돼 논란이 일고있다.', 0, 0, 2, 0, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt, bot_cnt)
  values(309, 588, '2017-02-17', '수미칩, 질소과자 여전', '농심의 수미칩이 국내 유통 중인 감자스낵 중 대표적인 질소 과자로 꼽혔다', 0, 0, 2, 0, 0);


-- 불매운동 기사 --
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1300, 300, '가습기 살균제 끝나지않은 이야기', 'http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=241&aid=0002640428');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1301, 300, '옥시 가습기 살균제 보고서 조작 서울대 교수, 징역 2년', 'http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=022&aid=0003100922');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1302, 300, '가습기 살균제, 외국인도 피해', 'http://www.hkbs.co.kr/?m=bbs&bid=envplus1&uid=412115');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1303, 300, '가습기 사태 7년형이 법정최고형.. 단죄 한계 드러내', 'http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=469&aid=0000182058');

insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1304, 301, 'NEWS HEADLINE 1', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1305, 301, 'NEWS HEADLINE 2', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1306, 301, 'NEWS HEADLINE 3', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1307, 301, 'NEWS HEADLINE 4', 'http://news.naver.com');

insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1308, 302, 'NEWS HEADLINE 1', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1309, 302, 'NEWS HEADLINE 2', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1310, 302, 'NEWS HEADLINE 3', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1311, 302, 'NEWS HEADLINE 4', 'http://news.naver.com');

insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1312, 303, 'NEWS HEADLINE 1', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1313, 303, 'NEWS HEADLINE 2', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1314, 303, 'NEWS HEADLINE 3', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1315, 303, 'NEWS HEADLINE 4', 'http://news.naver.com');

insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1316, 304, 'NEWS HEADLINE 1', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1317, 304, 'NEWS HEADLINE 2', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1318, 304, 'NEWS HEADLINE 3', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1319, 304, 'NEWS HEADLINE 4', 'http://news.naver.com');

insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1320, 305, 'NEWS HEADLINE 1', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1321, 305, 'NEWS HEADLINE 2', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1322, 305, 'NEWS HEADLINE 3', 'http://news.naver.com');
insert into bot_news(NEWSNO, BOTNO, HEADLINE, PATH) 
values(1323, 305, 'NEWS HEADLINE 4', 'http://news.naver.com');

-- 댓글---------------------------------------------------------------
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(600,2,'2017-02-17 04:04:04.0','1번 불량후기댓글입니다',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(601,3,'2017-02-17 04:04:04.0','2번 불량후기댓글입니다',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(602,4,'2017-02-17 04:04:04.0','3번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(603,5,'2017-02-17 04:04:04.0','4번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(604,6,'2017-02-17 04:04:04.0','5번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(605,7,'2017-02-17 04:04:04.0','6번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(606,8,'2017-02-17 04:04:04.0','7번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(607,9,'2017-02-17 04:04:04.0','8번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(608,10,'2017-02-17 04:04:04.0','9번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(609,11,'2017-02-17 04:04:04.0','10번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(610,2,'2017-02-17 04:04:04.0','11번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(611,3,'2017-02-17 04:04:04.0','12번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(612,4,'2017-02-17 04:04:04.0','13번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(613,5,'2017-02-17 04:04:04.0','14번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(614,6,'2017-02-17 04:04:04.0','15번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(615,7,'2017-02-17 04:04:04.0','16번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(616,8,'2017-02-17 04:04:04.0','17번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(617,9,'2017-02-17 04:04:04.0','18번 불량후기댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(618,10,'2017-02-17 04:04:04.0','19번 불량후기댓글입니다',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(619,11,'2017-02-17 04:04:04.0','20번 불량후기댓글입니다',1,'n');

insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(620,2,'2017-02-17 04:04:04.0','1번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(621,3,'2017-02-17 04:04:04.0','2번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(622,4,'2017-02-17 04:04:04.0','3번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(623,5,'2017-02-17 04:04:04.0','4번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(624,6,'2017-02-17 04:04:04.0','5번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(625,7,'2017-02-17 04:04:04.0','6번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(626,8,'2017-02-17 04:04:04.0','7번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(627,9,'2017-02-17 04:04:04.0','8번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(628,10,'2017-02-17 04:04:04.0','9번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(629,11,'2017-02-17 04:04:04.0','10번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(630,2,'2017-02-17 04:04:04.0','11번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(631,3,'2017-02-17 04:04:04.0','12번 불매운동댓글입니다',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(632,4,'2017-02-17 04:04:04.0','13번 불매운동댓글입니다',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(633,5,'2017-02-17 04:04:04.0','14번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(634,6,'2017-02-17 04:04:04.0','15번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(635,7,'2017-02-17 04:04:04.0','16번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(636,8,'2017-02-17 04:04:04.0','17번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(637,9,'2017-02-17 04:04:04.0','18번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(638,10,'2017-02-17 04:04:04.0','19번 불매운동댓글입니다',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(639,11,'2017-02-17 04:04:04.0','20번 불매운동댓글입니다',0,'n');

insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(640,2,'2017-02-17 04:04:04.0','1번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(641,3,'2017-02-17 04:04:04.0','2번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(642,4,'2017-02-17 04:04:04.0','3번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(643,5,'2017-02-17 04:04:04.0','4번 공동구매상품평입니다.',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(644,6,'2017-02-17 04:04:04.0','5번 공동구매상품평입니다.',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(645,7,'2017-02-17 04:04:04.0','6번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(646,8,'2017-02-17 04:04:04.0','7번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(647,9,'2017-02-17 04:04:04.0','8번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(648,10,'2017-02-17 04:04:04.0','9번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(649,11,'2017-02-17 04:04:04.0','10번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(650,2,'2017-02-17 04:04:04.0','11번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(651,3,'2017-02-17 04:04:04.0','12번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(652,4,'2017-02-17 04:04:04.0','13번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(653,5,'2017-02-17 04:04:04.0','14번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(654,6,'2017-02-17 04:04:04.0','15번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(655,7,'2017-02-17 04:04:04.0','16번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(656,8,'2017-02-17 04:04:04.0','17번 공동구매상품평입니다.',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(657,9,'2017-02-17 04:04:04.0','18번 공동구매상품평입니다.',1,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(658,10,'2017-02-17 04:04:04.0','19번 공동구매상품평입니다.',0,'n');
insert into cmt(ctno,mno,ct_date,cont,rep_cnt,del_yn) values(659,11,'2017-02-17 04:04:04.0','20번 공동구매상품평입니다.',0,'n');


-- 불량운동댓글
insert into rev_cmt(ctno,rvno) values(600,200);
insert into rev_cmt(ctno,rvno) values(601,200);
insert into rev_cmt(ctno,rvno) values(602,201);
insert into rev_cmt(ctno,rvno) values(603,201);
insert into rev_cmt(ctno,rvno) values(604,202);
insert into rev_cmt(ctno,rvno) values(605,202);
insert into rev_cmt(ctno,rvno) values(606,203);
insert into rev_cmt(ctno,rvno) values(607,203);
insert into rev_cmt(ctno,rvno) values(608,204);
insert into rev_cmt(ctno,rvno) values(609,204);
insert into rev_cmt(ctno,rvno) values(610,205);
insert into rev_cmt(ctno,rvno) values(611,205);
insert into rev_cmt(ctno,rvno) values(612,206);
insert into rev_cmt(ctno,rvno) values(613,206);
insert into rev_cmt(ctno,rvno) values(614,207);
insert into rev_cmt(ctno,rvno) values(615,207);
insert into rev_cmt(ctno,rvno) values(616,208);
insert into rev_cmt(ctno,rvno) values(617,208);
insert into rev_cmt(ctno,rvno) values(618,209);
insert into rev_cmt(ctno,rvno) values(619,209);


-- 불매운동댓글
insert into bot_cmt(ctno,botno) values(620,300);
insert into bot_cmt(ctno,botno) values(621,300);
insert into bot_cmt(ctno,botno) values(622,301);
insert into bot_cmt(ctno,botno) values(623,301);
insert into bot_cmt(ctno,botno) values(624,302);
insert into bot_cmt(ctno,botno) values(625,302);
insert into bot_cmt(ctno,botno) values(626,303);
insert into bot_cmt(ctno,botno) values(627,303);
insert into bot_cmt(ctno,botno) values(628,304);
insert into bot_cmt(ctno,botno) values(629,304);
insert into bot_cmt(ctno,botno) values(630,305);
insert into bot_cmt(ctno,botno) values(631,305);
insert into bot_cmt(ctno,botno) values(632,306);
insert into bot_cmt(ctno,botno) values(633,306);
insert into bot_cmt(ctno,botno) values(634,307);
insert into bot_cmt(ctno,botno) values(635,307);
insert into bot_cmt(ctno,botno) values(636,308);
insert into bot_cmt(ctno,botno) values(637,308);
insert into bot_cmt(ctno,botno) values(638,309);
insert into bot_cmt(ctno,botno) values(639,309);


-- 공동구매상품평
insert into pch_cmt(ctno,pno) values(640,400);
insert into pch_cmt(ctno,pno) values(641,400);
insert into pch_cmt(ctno,pno) values(642,401);
insert into pch_cmt(ctno,pno) values(643,401);
insert into pch_cmt(ctno,pno) values(644,402);
insert into pch_cmt(ctno,pno) values(645,402);
insert into pch_cmt(ctno,pno) values(646,403);
insert into pch_cmt(ctno,pno) values(647,403);
insert into pch_cmt(ctno,pno) values(648,404);
insert into pch_cmt(ctno,pno) values(649,404);
insert into pch_cmt(ctno,pno) values(650,405);
insert into pch_cmt(ctno,pno) values(651,405);
insert into pch_cmt(ctno,pno) values(652,406);
insert into pch_cmt(ctno,pno) values(653,406);
insert into pch_cmt(ctno,pno) values(654,407);
insert into pch_cmt(ctno,pno) values(655,407);
insert into pch_cmt(ctno,pno) values(656,408);
insert into pch_cmt(ctno,pno) values(657,408);
insert into pch_cmt(ctno,pno) values(658,409);
insert into pch_cmt(ctno,pno) values(659,409);

-- 신고사유
insert into rep_why(rwno,cont) values(1,"광고/음란성 글");
insert into rep_why(rwno,cont) values(2,"도배성 글");
insert into rep_why(rwno,cont) values(3,"욕설/반말/부적절한 언어 사용");
insert into rep_why(rwno,cont) values(4,"지나친 정치/종교 논쟁");
insert into rep_why(rwno,cont) values(5,"회원 분란 유도");
