from typing import Optional

from fastapi import APIRouter, HTTPException
from fastapi.params import Depends
from jinja2.nodes import List
from sqlalchemy.orm import Session

from schema.user import User, UserBase, UserList, UserOne, Token, UserLogin
from service.auth import userlogin
from service.database import get_db
from service.user import register, userlist, userone

router = APIRouter()

@router.post('/user', response_model=User)
async def new_user(user: UserBase, db: Session=Depends(get_db)):
    user = register(db, user)
    print(user)
    return User.model_validate(user)


@router.get('/users', response_model=list[UserList])
async def list_users(db: Session=Depends(get_db)):
    users = userlist(db)

    # 테이블조회하는 결과 객체를 UserList형식의 배열로 재생성
    # return [UserList.from_orm(u) for u in users]
    return [UserList.model_validate(u) for u in users]


@router.get('/user/{mno}', response_model=UserOne)
async def user_one(mno: int, db: Session=Depends(get_db)):
    user = userone(db, mno)

    # 유저 조회 안되면 404 전달
    if user is None:
        raise HTTPException(404, "Product not found")

    return UserOne.model_validate(user)


@router.post('/userlogin', response_model=Optional[Token])
async def user_login(login: UserLogin, db: Session=Depends(get_db)):
    print(login)  # 요청 데이터 출력
    user = userlogin(login, db)

    # 유저 조회 안되면 404 전달
    if user is None:
        raise HTTPException(401, "Product not found")

    return user