-- 일반유저
DROP TABLE IF EXISTS USER RESTRICT;

-- 불량후기
DROP TABLE IF EXISTS REVIEW RESTRICT;

-- 댓글
DROP TABLE IF EXISTS CMT RESTRICT;

-- 불매운동
DROP TABLE IF EXISTS BOT RESTRICT;

-- 기업정보
DROP TABLE IF EXISTS COMP RESTRICT;

-- 공동구매
DROP TABLE IF EXISTS PURCHS RESTRICT;

-- 위시리스트
DROP TABLE IF EXISTS WISH RESTRICT;

-- 불매기업관계
DROP TABLE IF EXISTS BOT_RLS RESTRICT;

-- 구매내역
DROP TABLE IF EXISTS PCH_HIST RESTRICT;

-- 신고사유
DROP TABLE IF EXISTS REP_WHY RESTRICT;

-- 게시글신고
DROP TABLE IF EXISTS BOARD_REP RESTRICT;

-- 회원
DROP TABLE IF EXISTS MEMB RESTRICT;

-- 댓글신고
DROP TABLE IF EXISTS CMT_REP RESTRICT;

-- 불매운동댓글
DROP TABLE IF EXISTS BOT_CMT RESTRICT;

-- 불량후기댓글
DROP TABLE IF EXISTS REV_CMT RESTRICT;

-- 공동구매상품평
DROP TABLE IF EXISTS PCH_CMT RESTRICT;

-- 공동구매사진
DROP TABLE IF EXISTS PCH_PHOT RESTRICT;

-- 불매운동기사
DROP TABLE IF EXISTS BOT_NEWS RESTRICT;

-- 일반유저
CREATE TABLE USER (
  UNO       INTEGER      NOT NULL COMMENT '유저일련번호', -- 유저일련번호
  B_DAY     DATE         NOT NULL COMMENT '생년월일', -- 생년월일
  TEL       VARCHAR(30)  NOT NULL COMMENT '전화번호', -- 전화번호
  BAS_ADR   VARCHAR(255) NULL     COMMENT '기본주소', -- 기본주소
  DET_ADR   VARCHAR(255) NULL     COMMENT '상세주소', -- 상세주소
  ZIP       VARCHAR(6)   NULL     COMMENT '우편번호', -- 우편번호
  JOB       VARCHAR(50)  NULL     COMMENT '직업', -- 직업
  GEN       CHAR(1)      NULL     COMMENT '성별', -- 성별
  OUT_TYPE  CHAR(1)      NULL     COMMENT '탈퇴유형', -- 탈퇴유형
  OUT_CONT  VARCHAR(255) NULL     COMMENT '탈퇴내용', -- 탈퇴내용
  JOIN_DATE DATE         NOT NULL COMMENT '가입일' -- 가입일
)
COMMENT '일반유저';

-- 일반유저
ALTER TABLE USER
  ADD CONSTRAINT PK_USER -- 일반유저 기본키
    PRIMARY KEY (
      UNO -- 유저일련번호
    );

-- 불량후기
CREATE TABLE REVIEW (
  RVNO     INTEGER      NOT NULL COMMENT '불량후기 일련번호', -- 불량후기 일련번호
  MNO      INTEGER      NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  RV_DATE  DATETIME     NOT NULL COMMENT '작성날짜', -- 작성날짜
  HEAD     VARCHAR(20)  NOT NULL COMMENT '말머리', -- 말머리
  TITLE    VARCHAR(255) NOT NULL COMMENT '제목', -- 제목
  CONT     MEDIUMTEXT   NOT NULL COMMENT '내용', -- 내용
  PATH     VARCHAR(255) NULL     COMMENT '사진경로', -- 사진경로
  VIEW_CNT INTEGER      NULL     COMMENT '조회수', -- 조회수
  HODU_CNT INTEGER      NULL     COMMENT '추천수', -- 추천수
  CMT_CNT  INTEGER      NULL     COMMENT '댓글수', -- 댓글수
  REP_CNT  INTEGER      NULL     COMMENT '신고수', -- 신고수
  DEL_YN   CHAR(1)      NULL     COMMENT '삭제여부' -- 삭제여부
)
COMMENT '불량후기';

-- 불량후기
ALTER TABLE REVIEW
  ADD CONSTRAINT PK_REVIEW -- 불량후기 기본키
    PRIMARY KEY (
      RVNO -- 불량후기 일련번호
    );

ALTER TABLE REVIEW
  MODIFY COLUMN RVNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '불량후기 일련번호';

-- 댓글
CREATE TABLE CMT (
  CTNO    INTEGER  NOT NULL COMMENT '댓글일련번호', -- 댓글일련번호
  MNO     INTEGER  NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  CT_DATE DATETIME NOT NULL COMMENT '작성날짜', -- 작성날짜
  CONT    TEXT     NOT NULL COMMENT '내용', -- 내용
  REP_CNT INTEGER  NULL     COMMENT '신고수', -- 신고수
  DEL_YN  CHAR(1)  NULL     COMMENT '삭제여부' -- 삭제여부
)
COMMENT '댓글';

-- 댓글
ALTER TABLE CMT
  ADD CONSTRAINT PK_CMT -- 댓글 기본키
    PRIMARY KEY (
      CTNO -- 댓글일련번호
    );

ALTER TABLE CMT
  MODIFY COLUMN CTNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '댓글일련번호';

-- 불매운동
CREATE TABLE BOT (
  BOTNO    INTEGER      NOT NULL COMMENT '불매운동 일련번호', -- 불매운동 일련번호
  CPNO     INTEGER      NOT NULL COMMENT '기업일련번호', -- 기업일련번호
  BOT_DATE DATETIME     NOT NULL COMMENT '작성날짜', -- 작성날짜
  TITLE    VARCHAR(255) NOT NULL COMMENT '제목', -- 제목
  CONT     MEDIUMTEXT   NOT NULL COMMENT '내용', -- 내용
  PT_PATH  VARCHAR(255) NULL     COMMENT '사진경로', -- 사진경로
  BOT_CNT  INTEGER      NULL     COMMENT '불매수', -- 불매수
  VIEW_CNT INTEGER      NULL     COMMENT '조회수', -- 조회수
  HODU_CNT INTEGER      NULL     COMMENT '추천수', -- 추천수
  CMT_CNT  INTEGER      NULL     COMMENT '댓글수', -- 댓글수
  SHR_CNT  INTEGER      NULL     COMMENT '공유수', -- 공유수
  KEYWORD  VARCHAR(50)  NULL     COMMENT '검색어' -- 검색어
)
COMMENT '불매운동';

-- 불매운동
ALTER TABLE BOT
  ADD CONSTRAINT PK_BOT -- 불매운동 기본키
    PRIMARY KEY (
      BOTNO -- 불매운동 일련번호
    );

ALTER TABLE BOT
  MODIFY COLUMN BOTNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '불매운동 일련번호';

-- 기업정보
CREATE TABLE COMP (
  CPNO    INTEGER      NOT NULL COMMENT '기업일련번호', -- 기업일련번호
  CP_NAME VARCHAR(255) NOT NULL COMMENT '기업명', -- 기업명
  PARNO   INTEGER      NOT NULL COMMENT '부모기업일련번호', -- 부모기업일련번호
  LVL     INTEGER      NOT NULL COMMENT '레벨' -- 레벨
)
COMMENT '기업정보';

-- 기업정보
ALTER TABLE COMP
  ADD CONSTRAINT PK_COMP -- 기업정보 기본키
    PRIMARY KEY (
      CPNO -- 기업일련번호
    );

ALTER TABLE COMP
  MODIFY COLUMN CPNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '기업일련번호';

-- 공동구매
CREATE TABLE PURCHS (
  PNO       INTEGER      NOT NULL COMMENT '공구일련번호', -- 공구일련번호
  CPNO      INTEGER      NOT NULL COMMENT '기업일련번호', -- 기업일련번호
  BOTNO     INTEGER      NULL     COMMENT '불매운동 일련번호', -- 불매운동 일련번호
  TITLE     VARCHAR(255) NOT NULL COMMENT '제목', -- 제목
  PRICE     INTEGER      NOT NULL COMMENT '가격', -- 가격
  ST_DATE   DATE         NOT NULL COMMENT '시작일', -- 시작일
  EN_DATE   DATE         NOT NULL COMMENT '종료일', -- 종료일
  DEV_DATE  DATE         NOT NULL COMMENT '배송일', -- 배송일
  TOTAL_CNT INTEGER      NOT NULL COMMENT '모집인원', -- 모집인원
  API_CNT   INTEGER      NULL     COMMENT '신청인원' -- 신청인원
)
COMMENT '공동구매';

-- 공동구매
ALTER TABLE PURCHS
  ADD CONSTRAINT PK_PURCHS -- 공동구매 기본키
    PRIMARY KEY (
      PNO -- 공구일련번호
    );

ALTER TABLE PURCHS
  MODIFY COLUMN PNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '공구일련번호';

-- 위시리스트
CREATE TABLE WISH (
  WNO      INTEGER      NOT NULL COMMENT '리스트일련번호', -- 리스트일련번호
  MNO      INTEGER      NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  PRO_NAME VARCHAR(255) NOT NULL COMMENT '상품명', -- 상품명
  MAKER    VARCHAR(255) NULL     COMMENT '제조사', -- 제조사
  BRAND    VARCHAR(255) NULL     COMMENT '브랜드', -- 브랜드
  PRICE    VARCHAR(255) NULL     COMMENT '가격', -- 가격
  PATH     VARCHAR(255) NULL     COMMENT '사진경로', -- 사진경로
  LINK     VARCHAR(255) NULL     COMMENT '링크주소' -- 링크주소
)
COMMENT '위시리스트';

-- 위시리스트
ALTER TABLE WISH
  ADD CONSTRAINT PK_WISH -- 위시리스트 기본키
    PRIMARY KEY (
      WNO -- 리스트일련번호
    );

ALTER TABLE WISH
  MODIFY COLUMN WNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '리스트일련번호';

-- 불매기업관계
CREATE TABLE BOT_RLS (
  MNO      INTEGER NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  CPNO     INTEGER NOT NULL COMMENT '기업일련번호', -- 기업일련번호
  REG_DATE DATE    NOT NULL COMMENT '등록일' -- 등록일
)
COMMENT '불매기업관계';

-- 불매기업관계
ALTER TABLE BOT_RLS
  ADD CONSTRAINT PK_BOT_RLS -- 불매기업관계 기본키
    PRIMARY KEY (
      MNO,  -- 회원일련번호
      CPNO  -- 기업일련번호
    );

ALTER TABLE BOT_RLS
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 구매내역
CREATE TABLE PCH_HIST (
  MNO      INTEGER      NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  PNO      INTEGER      NOT NULL COMMENT '공구일련번호', -- 공구일련번호
  PCH_DATE DATETIME     NOT NULL COMMENT '구매일', -- 구매일
  PCH_CNT  INTEGER      NOT NULL COMMENT '구매수량', -- 구매수량
  IMP_UID  VARCHAR(50)  NULL     COMMENT '결제아이디', -- 결제아이디
  RECEIPT  VARCHAR(255) NULL     COMMENT '매출전표', -- 매출전표
  ZIP      VARCHAR(6)   NULL     COMMENT '우편번호', -- 우편번호
  BAS_ADR  VARCHAR(255) NULL     COMMENT '기본주소', -- 기본주소
  DET_ADR  VARCHAR(255) NULL     COMMENT '상세주소' -- 상세주소
)
COMMENT '구매내역';

-- 구매내역
ALTER TABLE PCH_HIST
  ADD CONSTRAINT PK_PCH_HIST -- 구매내역 기본키
    PRIMARY KEY (
      MNO, -- 회원일련번호
      PNO  -- 공구일련번호
    );

-- 신고사유
CREATE TABLE REP_WHY (
  RWNO INTEGER      NOT NULL COMMENT '신고사유일련번호', -- 신고사유일련번호
  CONT VARCHAR(255) NOT NULL COMMENT '내용' -- 내용
)
COMMENT '신고사유';

-- 신고사유
ALTER TABLE REP_WHY
  ADD CONSTRAINT PK_REP_WHY -- 신고사유 기본키
    PRIMARY KEY (
      RWNO -- 신고사유일련번호
    );

ALTER TABLE REP_WHY
  MODIFY COLUMN RWNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '신고사유일련번호';

-- 게시글신고
CREATE TABLE BOARD_REP (
  MNO  INTEGER NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  RVNO INTEGER NOT NULL COMMENT '불량후기 일련번호', -- 불량후기 일련번호
  RWNO INTEGER NULL     COMMENT '신고사유일련번호' -- 신고사유일련번호
)
COMMENT '게시글신고';

-- 게시글신고
ALTER TABLE BOARD_REP
  ADD CONSTRAINT PK_BOARD_REP -- 게시글신고 기본키
    PRIMARY KEY (
      MNO,  -- 회원일련번호
      RVNO  -- 불량후기 일련번호
    );

ALTER TABLE BOARD_REP
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 회원
CREATE TABLE MEMB (
  MNO      INTEGER      NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  EMAIL    VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
  NAME     VARCHAR(50)  NOT NULL COMMENT '닉네임', -- 닉네임
  PWD      VARCHAR(50)  NOT NULL COMMENT '비밀번호', -- 비밀번호
  PATH     VARCHAR(255) NULL     COMMENT '사진경로', -- 사진경로
  LST_DATE DATETIME     NOT NULL COMMENT '최종접속일' -- 최종접속일
)
COMMENT '회원';

-- 회원
ALTER TABLE MEMB
  ADD CONSTRAINT PK_MEMB -- 회원 기본키
    PRIMARY KEY (
      MNO -- 회원일련번호
    );

-- 회원 유니크 인덱스
CREATE UNIQUE INDEX UIX_MEMB
  ON MEMB ( -- 회원
    EMAIL ASC, -- 이메일
    NAME ASC   -- 닉네임
  );

ALTER TABLE MEMB
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 댓글신고
CREATE TABLE CMT_REP (
  CTNO INTEGER NOT NULL COMMENT '댓글일련번호', -- 댓글일련번호
  MNO  INTEGER NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  RWNO INTEGER NOT NULL COMMENT '신고사유일련번호' -- 신고사유일련번호
)
COMMENT '댓글신고';

-- 댓글신고
ALTER TABLE CMT_REP
  ADD CONSTRAINT PK_CMT_REP -- 댓글신고 기본키
    PRIMARY KEY (
      CTNO, -- 댓글일련번호
      MNO   -- 회원일련번호
    );

-- 불매운동댓글
CREATE TABLE BOT_CMT (
  CTNO  INTEGER NOT NULL COMMENT '댓글일련번호', -- 댓글일련번호
  BOTNO INTEGER NOT NULL COMMENT '불매운동 일련번호' -- 불매운동 일련번호
)
COMMENT '불매운동댓글';

-- 불매운동댓글
ALTER TABLE BOT_CMT
  ADD CONSTRAINT PK_BOT_CMT -- 불매운동댓글 기본키
    PRIMARY KEY (
      CTNO,  -- 댓글일련번호
      BOTNO  -- 불매운동 일련번호
    );

-- 불량후기댓글
CREATE TABLE REV_CMT (
  CTNO INTEGER NOT NULL COMMENT '댓글일련번호', -- 댓글일련번호
  RVNO INTEGER NOT NULL COMMENT '불량후기 일련번호' -- 불량후기 일련번호
)
COMMENT '불량후기댓글';

-- 불량후기댓글
ALTER TABLE REV_CMT
  ADD CONSTRAINT PK_REV_CMT -- 불량후기댓글 기본키
    PRIMARY KEY (
      CTNO, -- 댓글일련번호
      RVNO  -- 불량후기 일련번호
    );

-- 공동구매상품평
CREATE TABLE PCH_CMT (
  PNO  INTEGER NOT NULL COMMENT '공구일련번호', -- 공구일련번호
  CTNO INTEGER NOT NULL COMMENT '댓글일련번호' -- 댓글일련번호
)
COMMENT '공동구매상품평';

-- 공동구매상품평
ALTER TABLE PCH_CMT
  ADD CONSTRAINT PK_PCH_CMT -- 공동구매상품평 기본키
    PRIMARY KEY (
      PNO,  -- 공구일련번호
      CTNO  -- 댓글일련번호
    );

-- 공동구매사진
CREATE TABLE PCH_PHOT (
  PPNO INTEGER      NOT NULL COMMENT '공동구매사진일련번호', -- 공동구매사진일련번호
  PNO  INTEGER      NOT NULL COMMENT '공구일련번호', -- 공구일련번호
  PATH VARCHAR(255) NOT NULL COMMENT '사진경로' -- 사진경로
)
COMMENT '공동구매사진';

-- 공동구매사진
ALTER TABLE PCH_PHOT
  ADD CONSTRAINT PK_PCH_PHOT -- 공동구매사진 기본키
    PRIMARY KEY (
      PPNO -- 공동구매사진일련번호
    );

ALTER TABLE PCH_PHOT
  MODIFY COLUMN PPNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '공동구매사진일련번호';

-- 불매운동기사
CREATE TABLE BOT_NEWS (
  NEWSNO   INTEGER      NOT NULL COMMENT '불매운동기사일련번호', -- 불매운동기사일련번호
  BOTNO    INTEGER      NOT NULL COMMENT '불매운동 일련번호', -- 불매운동 일련번호
  HEADLINE VARCHAR(255) NOT NULL COMMENT '제목', -- 제목
  PATH     VARCHAR(255) NOT NULL COMMENT '기사경로' -- 기사경로
)
COMMENT '불매운동기사';

-- 불매운동기사
ALTER TABLE BOT_NEWS
  ADD CONSTRAINT PK_BOT_NEWS -- 불매운동기사 기본키
    PRIMARY KEY (
      NEWSNO -- 불매운동기사일련번호
    );

ALTER TABLE BOT_NEWS
  MODIFY COLUMN NEWSNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '불매운동기사일련번호';

-- 일반유저
ALTER TABLE USER
  ADD CONSTRAINT FK_MEMB_TO_USER -- 회원 -> 일반유저
    FOREIGN KEY (
      UNO -- 유저일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 불량후기
ALTER TABLE REVIEW
  ADD CONSTRAINT FK_MEMB_TO_REVIEW -- 회원 -> 불량후기
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 댓글
ALTER TABLE CMT
  ADD CONSTRAINT FK_MEMB_TO_CMT -- 회원 -> 댓글
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 불매운동
ALTER TABLE BOT
  ADD CONSTRAINT FK_COMP_TO_BOT -- 기업정보 -> 불매운동
    FOREIGN KEY (
      CPNO -- 기업일련번호
    )
    REFERENCES COMP ( -- 기업정보
      CPNO -- 기업일련번호
    );

-- 공동구매
ALTER TABLE PURCHS
  ADD CONSTRAINT FK_COMP_TO_PURCHS -- 기업정보 -> 공동구매
    FOREIGN KEY (
      CPNO -- 기업일련번호
    )
    REFERENCES COMP ( -- 기업정보
      CPNO -- 기업일련번호
    );

-- 공동구매
ALTER TABLE PURCHS
  ADD CONSTRAINT FK_BOT_TO_PURCHS -- 불매운동 -> 공동구매
    FOREIGN KEY (
      BOTNO -- 불매운동 일련번호
    )
    REFERENCES BOT ( -- 불매운동
      BOTNO -- 불매운동 일련번호
    );

-- 위시리스트
ALTER TABLE WISH
  ADD CONSTRAINT FK_MEMB_TO_WISH -- 회원 -> 위시리스트
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 불매기업관계
ALTER TABLE BOT_RLS
  ADD CONSTRAINT FK_COMP_TO_BOT_RLS -- 기업정보 -> 불매기업관계
    FOREIGN KEY (
      CPNO -- 기업일련번호
    )
    REFERENCES COMP ( -- 기업정보
      CPNO -- 기업일련번호
    );

-- 불매기업관계
ALTER TABLE BOT_RLS
  ADD CONSTRAINT FK_MEMB_TO_BOT_RLS -- 회원 -> 불매기업관계
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 구매내역
ALTER TABLE PCH_HIST
  ADD CONSTRAINT FK_MEMB_TO_PCH_HIST -- 회원 -> 구매내역
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 구매내역
ALTER TABLE PCH_HIST
  ADD CONSTRAINT FK_PURCHS_TO_PCH_HIST -- 공동구매 -> 구매내역
    FOREIGN KEY (
      PNO -- 공구일련번호
    )
    REFERENCES PURCHS ( -- 공동구매
      PNO -- 공구일련번호
    );

-- 게시글신고
ALTER TABLE BOARD_REP
  ADD CONSTRAINT FK_REVIEW_TO_BOARD_REP -- 불량후기 -> 게시글신고
    FOREIGN KEY (
      RVNO -- 불량후기 일련번호
    )
    REFERENCES REVIEW ( -- 불량후기
      RVNO -- 불량후기 일련번호
    );

-- 게시글신고
ALTER TABLE BOARD_REP
  ADD CONSTRAINT FK_MEMB_TO_BOARD_REP -- 회원 -> 게시글신고
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 게시글신고
ALTER TABLE BOARD_REP
  ADD CONSTRAINT FK_REP_WHY_TO_BOARD_REP -- 신고사유 -> 게시글신고
    FOREIGN KEY (
      RWNO -- 신고사유일련번호
    )
    REFERENCES REP_WHY ( -- 신고사유
      RWNO -- 신고사유일련번호
    );

-- 댓글신고
ALTER TABLE CMT_REP
  ADD CONSTRAINT FK_CMT_TO_CMT_REP -- 댓글 -> 댓글신고
    FOREIGN KEY (
      CTNO -- 댓글일련번호
    )
    REFERENCES CMT ( -- 댓글
      CTNO -- 댓글일련번호
    );

-- 댓글신고
ALTER TABLE CMT_REP
  ADD CONSTRAINT FK_REP_WHY_TO_CMT_REP -- 신고사유 -> 댓글신고
    FOREIGN KEY (
      RWNO -- 신고사유일련번호
    )
    REFERENCES REP_WHY ( -- 신고사유
      RWNO -- 신고사유일련번호
    );

-- 댓글신고
ALTER TABLE CMT_REP
  ADD CONSTRAINT FK_MEMB_TO_CMT_REP -- 회원 -> 댓글신고
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 불매운동댓글
ALTER TABLE BOT_CMT
  ADD CONSTRAINT FK_CMT_TO_BOT_CMT -- 댓글 -> 불매운동댓글
    FOREIGN KEY (
      CTNO -- 댓글일련번호
    )
    REFERENCES CMT ( -- 댓글
      CTNO -- 댓글일련번호
    );

-- 불매운동댓글
ALTER TABLE BOT_CMT
  ADD CONSTRAINT FK_BOT_TO_BOT_CMT -- 불매운동 -> 불매운동댓글
    FOREIGN KEY (
      BOTNO -- 불매운동 일련번호
    )
    REFERENCES BOT ( -- 불매운동
      BOTNO -- 불매운동 일련번호
    );

-- 불량후기댓글
ALTER TABLE REV_CMT
  ADD CONSTRAINT FK_CMT_TO_REV_CMT -- 댓글 -> 불량후기댓글
    FOREIGN KEY (
      CTNO -- 댓글일련번호
    )
    REFERENCES CMT ( -- 댓글
      CTNO -- 댓글일련번호
    );

-- 불량후기댓글
ALTER TABLE REV_CMT
  ADD CONSTRAINT FK_REVIEW_TO_REV_CMT -- 불량후기 -> 불량후기댓글
    FOREIGN KEY (
      RVNO -- 불량후기 일련번호
    )
    REFERENCES REVIEW ( -- 불량후기
      RVNO -- 불량후기 일련번호
    );

-- 공동구매상품평
ALTER TABLE PCH_CMT
  ADD CONSTRAINT FK_PURCHS_TO_PCH_CMT -- 공동구매 -> 공동구매상품평
    FOREIGN KEY (
      PNO -- 공구일련번호
    )
    REFERENCES PURCHS ( -- 공동구매
      PNO -- 공구일련번호
    );

-- 공동구매상품평
ALTER TABLE PCH_CMT
  ADD CONSTRAINT FK_CMT_TO_PCH_CMT -- 댓글 -> 공동구매상품평
    FOREIGN KEY (
      CTNO -- 댓글일련번호
    )
    REFERENCES CMT ( -- 댓글
      CTNO -- 댓글일련번호
    );

-- 공동구매사진
ALTER TABLE PCH_PHOT
  ADD CONSTRAINT FK_PURCHS_TO_PCH_PHOT -- 공동구매 -> 공동구매사진
    FOREIGN KEY (
      PNO -- 공구일련번호
    )
    REFERENCES PURCHS ( -- 공동구매
      PNO -- 공구일련번호
    );

-- 불매운동기사
ALTER TABLE BOT_NEWS
  ADD CONSTRAINT FK_BOT_TO_BOT_NEWS -- 불매운동 -> 불매운동기사
    FOREIGN KEY (
      BOTNO -- 불매운동 일련번호
    )
    REFERENCES BOT ( -- 불매운동
      BOTNO -- 불매운동 일련번호
    );