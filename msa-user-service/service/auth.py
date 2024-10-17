from os import access

from sqlalchemy.orm import Session
from models.user import User
from schema.user import UserLogin, Token


from sqlalchemy.orm import Session
from fastapi import HTTPException
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
