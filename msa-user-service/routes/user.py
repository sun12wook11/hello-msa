from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from schema.user import User, UserBase
from service.database import get_db

router = APIRouter()

# POST 메서드를 처리하도록 수정
@router.post('/user', response_model=User)
async def new_user(user: UserBase, db:Session=Depends(get_db)):
    print(user)

    return {'msg': 'ok'}
