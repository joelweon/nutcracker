-- 포함되지 않은 테이블 삭제
DROP TABLE IF EXISTS BOT_PHOT RESTRICT;
DROP TABLE IF EXISTS REV_PHOT RESTRICT;

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

-- 기업관계
DROP TABLE IF EXISTS COM_RLS RESTRICT;

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
  UNO       INTEGER      NOT NULL, -- 유저일련번호
  B_DAY     DATE         NOT NULL, -- 생년월일
  TEL       VARCHAR(30)  NOT NULL, -- 전화번호
  BAS_ADR   VARCHAR(255) NULL,     -- 기본주소
  DET_ADR   VARCHAR(255) NULL,     -- 상세주소
  ZIP       VARCHAR(6)   NULL,     -- 우편번호
  JOB       VARCHAR(50)  NULL,     -- 직업
  GEN       CHAR(1)      NULL,     -- 성별
  OUT_TYPE  CHAR(1)      NULL,     -- 탈퇴유형
  OUT_CONT  VARCHAR(255) NULL,     -- 탈퇴내용
  JOIN_DATE DATE         NOT NULL  -- 가입일
);

-- 일반유저
ALTER TABLE USER
  ADD CONSTRAINT PK_USER -- 일반유저 기본키
    PRIMARY KEY (
      UNO -- 유저일련번호
    );

-- 불량후기
CREATE TABLE REVIEW (
  RVNO     INTEGER      NOT NULL, -- 불량후기 일련번호
  MNO      INTEGER      NOT NULL, -- 회원일련번호
  RV_DATE  DATETIME     NOT NULL, -- 작성날짜
  HEAD     VARCHAR(20)  NOT NULL, -- 말머리
  TITLE    VARCHAR(255) NOT NULL, -- 제목
  CONT     MEDIUMTEXT   NOT NULL, -- 내용
  PATH     VARCHAR(255) NULL,     -- 사진경로
  VIEW_CNT INTEGER      NULL,     -- 조회수
  HODU_CNT INTEGER      NULL,     -- 추천수
  CMT_CNT  INTEGER      NULL,     -- 댓글수
  REP_CNT  INTEGER      NULL,     -- 신고수
  DEL_YN   CHAR(1)      NULL      -- 삭제여부
);

-- 불량후기
ALTER TABLE REVIEW
  ADD CONSTRAINT PK_REVIEW -- 불량후기 기본키
    PRIMARY KEY (
      RVNO -- 불량후기 일련번호
    );

ALTER TABLE REVIEW
  MODIFY COLUMN RVNO INTEGER NOT NULL AUTO_INCREMENT;

-- 댓글
CREATE TABLE CMT (
  CTNO    INTEGER  NOT NULL, -- 댓글일련번호
  MNO     INTEGER  NOT NULL, -- 회원일련번호
  CT_DATE DATETIME NOT NULL, -- 작성날짜
  CONT    TEXT     NOT NULL, -- 내용
  REP_CNT INTEGER  NULL,     -- 신고수
  DEL_YN  CHAR(1)  NULL      -- 삭제여부
);

-- 댓글
ALTER TABLE CMT
  ADD CONSTRAINT PK_CMT -- 댓글 기본키
    PRIMARY KEY (
      CTNO -- 댓글일련번호
    );

ALTER TABLE CMT
  MODIFY COLUMN CTNO INTEGER NOT NULL AUTO_INCREMENT;

-- 불매운동
CREATE TABLE BOT (
  BOTNO    INTEGER      NOT NULL, -- 불매운동 일련번호
  CPNO     INTEGER      NOT NULL, -- 기업일련번호
  BOT_DATE DATETIME     NOT NULL, -- 작성날짜
  TITLE    VARCHAR(255) NOT NULL, -- 제목
  CONT     MEDIUMTEXT   NOT NULL, -- 내용
  PATH     VARCHAR(255) NULL,     -- 사진경로
  VIEW_CNT INTEGER      NULL,     -- 조회수
  HODU_CNT INTEGER      NULL,     -- 추천수
  CMT_CNT  INTEGER      NULL,     -- 댓글수
  SHR_CNT  INTEGER      NULL      -- 공유수
);

-- 불매운동
ALTER TABLE BOT
  ADD CONSTRAINT PK_BOT -- 불매운동 기본키
    PRIMARY KEY (
      BOTNO -- 불매운동 일련번호
    );

ALTER TABLE BOT
  MODIFY COLUMN BOTNO INTEGER NOT NULL AUTO_INCREMENT;

-- 기업정보
CREATE TABLE COMP (
  CPNO    INTEGER      NOT NULL, -- 기업일련번호
  CP_NAME VARCHAR(255) NOT NULL  -- 기업명
);

-- 기업정보
ALTER TABLE COMP
  ADD CONSTRAINT PK_COMP -- 기업정보 기본키
    PRIMARY KEY (
      CPNO -- 기업일련번호
    );

ALTER TABLE COMP
  MODIFY COLUMN CPNO INTEGER NOT NULL AUTO_INCREMENT;

-- 공동구매
CREATE TABLE PURCHS (
  PNO       INTEGER      NOT NULL, -- 공구일련번호
  CPNO      INTEGER      NOT NULL, -- 기업일련번호
  TITLE     VARCHAR(255) NOT NULL, -- 제목
  PRICE     INTEGER      NOT NULL, -- 가격
  ST_DATE   DATE         NOT NULL, -- 시작일
  EN_DATE   DATE         NOT NULL, -- 종료일
  DEV_DATE  DATE         NOT NULL, -- 배송일
  TOTAL_CNT INTEGER      NOT NULL, -- 모집인원
  API_CNT   INTEGER      NULL      -- 신청인원
);

-- 공동구매
ALTER TABLE PURCHS
  ADD CONSTRAINT PK_PURCHS -- 공동구매 기본키
    PRIMARY KEY (
      PNO -- 공구일련번호
    );

ALTER TABLE PURCHS
  MODIFY COLUMN PNO INTEGER NOT NULL AUTO_INCREMENT;

-- 위시리스트
CREATE TABLE WISH (
  WNO      INTEGER      NOT NULL, -- 리스트일련번호
  MNO      INTEGER      NOT NULL, -- 회원일련번호
  PRO_NAME VARCHAR(255) NOT NULL, -- 상품명
  PRO_COMP VARCHAR(255) NOT NULL, -- 제조사
  PRICE    INTEGER      NOT NULL, -- 가격
  PATH     VARCHAR(255) NOT NULL, -- 사진경로
  LINK     VARCHAR(255) NOT NULL  -- 링크주소
);

-- 위시리스트
ALTER TABLE WISH
  ADD CONSTRAINT PK_WISH -- 위시리스트 기본키
    PRIMARY KEY (
      WNO -- 리스트일련번호
    );

ALTER TABLE WISH
  MODIFY COLUMN WNO INTEGER NOT NULL AUTO_INCREMENT;

-- 불매기업관계
CREATE TABLE BOT_RLS (
  MNO      INTEGER NOT NULL, -- 회원일련번호
  CPNO     INTEGER NOT NULL, -- 기업일련번호
  REG_DATE DATE    NOT NULL  -- 등록일
);

-- 불매기업관계
ALTER TABLE BOT_RLS
  ADD CONSTRAINT PK_BOT_RLS -- 불매기업관계 기본키
    PRIMARY KEY (
      MNO,  -- 회원일련번호
      CPNO  -- 기업일련번호
    );

ALTER TABLE BOT_RLS
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT;

-- 구매내역
CREATE TABLE PCH_HIST (
  MNO      INTEGER  NOT NULL, -- 회원일련번호
  PNO      INTEGER  NOT NULL, -- 공구일련번호
  PCH_DATE DATETIME NOT NULL, -- 구매일
  PCH_CNT  INTEGER  NOT NULL  -- 구매수량
);

-- 구매내역
ALTER TABLE PCH_HIST
  ADD CONSTRAINT PK_PCH_HIST -- 구매내역 기본키
    PRIMARY KEY (
      MNO, -- 회원일련번호
      PNO  -- 공구일련번호
    );

-- 신고사유
CREATE TABLE REP_WHY (
  RWNO INTEGER      NOT NULL, -- 신고사유일련번호
  CONT VARCHAR(255) NOT NULL  -- 내용
);

-- 신고사유
ALTER TABLE REP_WHY
  ADD CONSTRAINT PK_REP_WHY -- 신고사유 기본키
    PRIMARY KEY (
      RWNO -- 신고사유일련번호
    );

ALTER TABLE REP_WHY
  MODIFY COLUMN RWNO INTEGER NOT NULL AUTO_INCREMENT;

-- 게시글신고
CREATE TABLE BOARD_REP (
  MNO  INTEGER NOT NULL, -- 회원일련번호
  RVNO INTEGER NOT NULL, -- 불량후기 일련번호
  RWNO INTEGER NULL      -- 신고사유일련번호
);

-- 게시글신고
ALTER TABLE BOARD_REP
  ADD CONSTRAINT PK_BOARD_REP -- 게시글신고 기본키
    PRIMARY KEY (
      MNO,  -- 회원일련번호
      RVNO  -- 불량후기 일련번호
    );

ALTER TABLE BOARD_REP
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT;

-- 기업관계
CREATE TABLE COM_RLS (
  PARNO INTEGER NOT NULL, -- 부모기업일련번호
  CHINO INTEGER NOT NULL  -- 자식기업일련번호
);

-- 기업관계
ALTER TABLE COM_RLS
  ADD CONSTRAINT PK_COM_RLS -- 기업관계 기본키
    PRIMARY KEY (
      PARNO, -- 부모기업일련번호
      CHINO  -- 자식기업일련번호
    );

-- 회원
CREATE TABLE MEMB (
  MNO      INTEGER      NOT NULL, -- 회원일련번호
  EMAIL    VARCHAR(40)  NOT NULL, -- 이메일
  NAME     VARCHAR(50)  NOT NULL, -- 닉네임
  PWD      VARCHAR(50)  NOT NULL, -- 비밀번호
  PATH     VARCHAR(255) NULL,     -- 사진경로
  LST_DATE DATETIME     NOT NULL  -- 최종접속일
);

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
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT;

-- 댓글신고
CREATE TABLE CMT_REP (
  CTNO INTEGER NOT NULL, -- 댓글일련번호
  MNO  INTEGER NOT NULL, -- 회원일련번호
  RWNO INTEGER NOT NULL  -- 신고사유일련번호
);

-- 댓글신고
ALTER TABLE CMT_REP
  ADD CONSTRAINT PK_CMT_REP -- 댓글신고 기본키
    PRIMARY KEY (
      CTNO, -- 댓글일련번호
      MNO   -- 회원일련번호
    );

-- 불매운동댓글
CREATE TABLE BOT_CMT (
  CTNO  INTEGER NOT NULL, -- 댓글일련번호
  BOTNO INTEGER NOT NULL  -- 불매운동 일련번호
);

-- 불매운동댓글
ALTER TABLE BOT_CMT
  ADD CONSTRAINT PK_BOT_CMT -- 불매운동댓글 기본키
    PRIMARY KEY (
      CTNO,  -- 댓글일련번호
      BOTNO  -- 불매운동 일련번호
    );

-- 불량후기댓글
CREATE TABLE REV_CMT (
  CTNO INTEGER NOT NULL, -- 댓글일련번호
  RVNO INTEGER NOT NULL  -- 불량후기 일련번호
);

-- 불량후기댓글
ALTER TABLE REV_CMT
  ADD CONSTRAINT PK_REV_CMT -- 불량후기댓글 기본키
    PRIMARY KEY (
      CTNO, -- 댓글일련번호
      RVNO  -- 불량후기 일련번호
    );

-- 공동구매상품평
CREATE TABLE PCH_CMT (
  PNO  INTEGER NOT NULL, -- 공구일련번호
  CTNO INTEGER NOT NULL  -- 댓글일련번호
);

-- 공동구매상품평
ALTER TABLE PCH_CMT
  ADD CONSTRAINT PK_PCH_CMT -- 공동구매상품평 기본키
    PRIMARY KEY (
      PNO,  -- 공구일련번호
      CTNO  -- 댓글일련번호
    );

-- 공동구매사진
CREATE TABLE PCH_PHOT (
  PPNO INTEGER      NOT NULL, -- 공동구매사진일련번호
  PNO  INTEGER      NOT NULL, -- 공구일련번호
  PATH VARCHAR(255) NOT NULL  -- 사진경로
);

-- 공동구매사진
ALTER TABLE PCH_PHOT
  ADD CONSTRAINT PK_PCH_PHOT -- 공동구매사진 기본키
    PRIMARY KEY (
      PPNO -- 공동구매사진일련번호
    );

ALTER TABLE PCH_PHOT
  MODIFY COLUMN PPNO INTEGER NOT NULL AUTO_INCREMENT;

-- 불매운동기사
CREATE TABLE BOT_NEWS (
  NEWSNO   INTEGER      NOT NULL, -- 불매운동기사일련번호
  BOTNO    INTEGER      NOT NULL, -- 불매운동 일련번호
  HEADLINE VARCHAR(255) NOT NULL, -- 제목
  PATH     VARCHAR(255) NOT NULL  -- 기사경로
);

-- 불매운동기사
ALTER TABLE BOT_NEWS
  ADD CONSTRAINT PK_BOT_NEWS -- 불매운동기사 기본키
    PRIMARY KEY (
      NEWSNO -- 불매운동기사일련번호
    );

ALTER TABLE BOT_NEWS
  MODIFY COLUMN NEWSNO INTEGER NOT NULL AUTO_INCREMENT;

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

-- 기업관계
ALTER TABLE COM_RLS
  ADD CONSTRAINT FK_COMP_TO_COM_RLS -- 기업정보 -> 기업관계
    FOREIGN KEY (
      PARNO -- 부모기업일련번호
    )
    REFERENCES COMP ( -- 기업정보
      CPNO -- 기업일련번호
    );

-- 기업관계
ALTER TABLE COM_RLS
  ADD CONSTRAINT FK_COMP_TO_COM_RLS2 -- 기업정보 -> 기업관계2
    FOREIGN KEY (
      CHINO -- 자식기업일련번호
    )
    REFERENCES COMP ( -- 기업정보
      CPNO -- 기업일련번호
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