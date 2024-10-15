from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class User(BaseModel):
    userid: str
    passwd: str
    name: str
    email: str

# POST 메서드를 처리하도록 수정
@router.post('/user')
async def new_user(user: User):
    return {'message': 'User created', 'user': user}
