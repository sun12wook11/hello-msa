from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Product (BaseModel):
    name: str
    desc: str
    price: str
    maker: str
    regdate: str

# POST 메서드를 처리하도록 수정
@router.post('/product')
async def new_product(product: Product):
    print(product)
    return {'msg': 'product ok'}
