from typing import Optional
from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session
from schema.product import ProductBase, Product, ProductList, ProductOne
from service.database import get_db
from service.product import register, productlist, productone

router = APIRouter()

# POST 메서드를 처리하도록 수정
@router.post('/product', response_model=Product)
async def new_product(product: ProductBase, db: Session=Depends(get_db)):
    print(product)
    return register(db, product)


@router.get('/products', response_model=list[ProductList])
async def list_products(db: Session=Depends(get_db)):
    products = productlist(db)
    return [ProductList.model_validate(p) for p in products]


@router.get('/product/{pno}', response_model=Optional[ProductOne])
async def product_one(pno: int, db: Session=Depends(get_db)):
    product = productone(db, pno)

    # 상품 조회 안되면 404 전달
    if product is None:
        raise HTTPException(404, "Product not found")

    return ProductOne.model_validate(product)