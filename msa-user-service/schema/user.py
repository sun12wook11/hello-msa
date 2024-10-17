from pydantic import BaseModel


class UserBase(BaseModel):
    userid: str
    passwd: str
    name: str
    email: str

# 유저베이스를 토대로 상속 받음
# user 테이블에 플러스되는것들
class User(UserBase):
    mno: int
    regdate: str

    # ORM 맵핑을 위한 설정
    # 데이터베이스 테이블 각 행 <-> pydantic
    class Config:
        from_attributes=True

# users list 리딩용
class UserList(BaseModel):
    userid: str
    name: str
    mno: int
    regdate: str

    class Config:
        from_attributes=True

# userone 리딩용
class UserOne(BaseModel):
    userid: str
    name: str
    mno: int
    email: str
    regdate: str

    class Config:
        from_attributes=True

class Token(BaseModel):
    access_token: str
    token_type: str

class UserLogin(BaseModel):
    userid: str
    passwd: str