from fastapi import APIRouter
from fastapi.params import Depends
from jinja2.nodes import List
from sqlalchemy.orm import Session

from schema.user import User, UserBase, UserList
from service.database import get_db
from service.user import register, userlist

router = APIRouter()

@router.post('/user', response_model=User)
async def new_user(user: UserBase, db: Session=Depends(get_db)):
    print(user)
    return register(db, user)

@router.get('/users', response_model=list[UserList])
async def list_users(db: Session=Depends(get_db)):
    users = userlist(db)

    # 테이블조회하는 결과 객체를 UserList형식의 배열로 재생성
    # return [UserList.from_orm(u) for u in users]
    return [UserList.model_validate(u) for u in users]