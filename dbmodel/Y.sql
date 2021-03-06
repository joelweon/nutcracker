
-- 불매운동 --
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(300, 500, '2017-02-08','옥시레킷벤키저 가습기 살균제 사건','최근 논란이 되고있는 가습기 살균제 사건입니다',0,0,2,0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(301, 502, '2017-02-09', '유한킴벌리 물티슈 유독물질 과다검출', '유한킴벌리가 제조·생산한 일부 물티슈에서 허용기준치를 초과한 메탄올이 검출됐다.', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(302, 557, '2017-02-10', '독성물질 논란 팸퍼스 귀저기 판매 중단', '한국 피앤지(P&G)가 국내에서 유통하는 수입 기저귀 일부 품목에서 화학 물질이 검출됐다는 해외 언론 보도가 나와 논란이 일고 있다', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(303, 522, '2017-02-11', '메디안 독소 성분 검출', '아모레 메디안후레쉬포레스트치약 등 치약 11종에  가습기 살균제 독성물질이 사용됐다.', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(304, 547, '2017-02-12', '다우니 유독물질 과다검출', '한국P&G가 수입·판매하고 있는 섬유유연제 다우니에서 유독물질이 검출됐다. ', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(305, 558, '2017-02-13', '위메프 채용 갑질논란', '소셜커머스 기업 위메프가 수습사원 11명을 최종합격 불합격 시켜 논란이 되고있다.', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(306, 584, '2017-02-14', '동서식품 대장균 시리얼 판매 논란', '동서식품이 판매중인 시리얼 중 일부제품에서 대장균이 검출된 사실을 알고도 폐기하지 않고 제품을 섞어 완제품을 많들어 유동시켰다 적발되었다.', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(307, 571, '2017-02-15', '남양유업 갑질횡포', '남양유업에서 지역대리점에 물건을 밀어내기(강매)를 한다는 것이 적발되었다.', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(308, 587, '2017-02-16', '롯데제과 락스 초코바', '악취와 이상한 맛이 나 전량 수거된 롯데제과 초코바 에서 락스 성분이 검출돼 논란이 일고있다.', 0, 0, 2, 0);
insert into bot(botno, cpno, bot_date, title, cont, view_cnt, hodu_cnt, cmt_cnt, shr_cnt)
  values(309, 588, '2017-02-17', '수미칩, 질소과자 여전', '농심의 수미칩이 국내 유통 중인 감자스낵 중 대표적인 질소 과자로 꼽혔다', 0, 0, 2, 0);


-- 불매운동 사진 --
insert into bot_phot(bpno, botno, path) values(350, 300, 'img1_1.jpg');
insert into bot_phot(bpno, botno, path) values(351, 300, 'img1_2.jpg');
insert into bot_phot(bpno, botno, path) values(352, 301, 'img2_1.jpg');
insert into bot_phot(bpno, botno, path) values(353, 302, 'img3_1.jpg');
insert into bot_phot(bpno, botno, path) values(354, 302, 'img3_2.jpg');
insert into bot_phot(bpno, botno, path) values(355, 303, 'img4_1.jpg');
insert into bot_phot(bpno, botno, path) values(356, 304, 'img5_1.jpg');
insert into bot_phot(bpno, botno, path) values(357, 304, 'img5_2.jpg');
insert into bot_phot(bpno, botno, path) values(358, 305, 'img6_1.jpg');
insert into bot_phot(bpno, botno, path) values(359, 306, 'img7_1.jpg');
insert into bot_phot(bpno, botno, path) values(360, 306, 'img7_2.jpg');
insert into bot_phot(bpno, botno, path) values(361, 306, 'img7_3.jpg');
insert into bot_phot(bpno, botno, path) values(362, 307, 'img8_1.jpg');
insert into bot_phot(bpno, botno, path) values(363, 307, 'img8_2.jpg');
insert into bot_phot(bpno, botno, path) values(364, 308, 'img9_1.jpg');
insert into bot_phot(bpno, botno, path) values(365, 309, 'img10_1.jpg');
insert into bot_phot(bpno, botno, path) values(366, 309, 'img10_2.jpg');
insert into bot_phot(bpno, botno, path) values(367, 309, 'img10_3.jpg');


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



