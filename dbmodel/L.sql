-- 기업정보
insert into comp(cpno,cp_name) 
    values(500,'제일기업');
insert into comp(cpno,cp_name) 
    values(501,'내일기업');
insert into comp(cpno,cp_name) 
    values(502,'매일기업');
insert into comp(cpno,cp_name) 
    values(503,'가일기업');
insert into comp(cpno,cp_name) 
    values(504,'하일기업');


-- 공동구매
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,apy_cnt) 
    values(400,500,'물티슈',1000,'2017-02-16','2017-03-16','2017-03-18',50,30);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,apy_cnt) 
    values(401,500,'가습기',3000,'2017-02-16','2017-03-16','2017-03-18',50,30);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,apy_cnt) 
    values(402,501,'기저귀',5000,'2017-02-18','2017-03-28','2017-03-30',50,30);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt) 
    values(403,502,'섬유탈취제',10000,'2017-02-24','2017-03-24','2017-03-026',50);
insert into purchs(pno,cpno,title,price,st_date,en_date,dev_date,total_cnt,apy_cnt) 
    values(404,503,'텀블러',2000,'2017-02-20','2017-03-20','2017-03-22',50,30);


-- 공동구매사진
insert into pch_phot(ppno,pno,path) 
    values(450,400,'mul.jpg');
insert into pch_phot(ppno,pno,path) 
    values(451,401,'ga.jpg');
insert into pch_phot(ppno,pno,path) 
    values(452,403,'sum.jpg');
insert into pch_phot(ppno,pno,path) 
    values(453,404,'tum1.jpg');
insert into pch_phot(ppno,pno,path) 
    values(454,404,'tum2.jpg');