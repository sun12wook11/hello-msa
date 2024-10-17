from sqlalchemy.orm import Session

from models.user import User
from schema.user import UserBase
from service.auth import hashed_password


# 회원가입 처리
# 기본 회원정보 + 번호,가입일
def register(db: Session, user: UserBase):

    hash_passwd = hashed_password(user.passwd)
    user = User(**user.model_dump())
    user.passwd = hash_passwd # 기존 비밀번호를 암호화 비밀번호로 변경
    db.add(user)
    db.commit()
    db.refresh(user)
    print(user)

    return user

# 회원 목록 조회
def userlist(db: Session):
    return db.query(User.mno, User.userid, User.name, User.regdate ).all()

# 회원 목록 조회
def userone(db: Session, mno: int):
    return db.query(User).filter(User.mno == mno).first()
