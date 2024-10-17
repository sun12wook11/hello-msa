
import bcrypt

from sqlalchemy.orm import Session
from models.user import User
from schema.user import UserLogin, Token

def userlogin(login: UserLogin, db: Session):
    loginuser = db.query(User).filter(User.userid == login.userid, User.passwd == login.passwd).first()

    if loginuser is None:
        token = None
    else:
        token = Token(access_token="Hello", token_type="Bearer")

    # 여기에 JWT 토큰 생성 로직을 추가하세요
    # token = "생성된_JWT_토큰_여기에_넣기"  # JWT 토큰 생성 코드 필요

    return token

# 비밀번호 단방향 암호화 서비스 추가
# bcrypt : 비밀번호 단방향 패키지
# 암호화 방법 : 사용자비번 + salt 고유키
def hashed_password(passwd):
    # 비밀번호 해시 생성
    SALT = bcrypt.gensalt()
    hashed_passwd = bcrypt.hashpw(passwd.encode('utf-8'), SALT)
    print(hashed_passwd)

    return hashed_passwd
