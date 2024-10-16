from sqlalchemy.orm import Session

from models.product import Product
from schema.product import ProductBase

# 회원가입 처리
# 기본 회원정보 + 번호,가입일
def register(db: Session, product: ProductBase):
    product = Product(**product.model_dump())
    db.add(product)
    db.commit()
    db.refresh(product)
    print(product)

    return product


def productlist(db: Session):
    return db.query(Product.pno, Product.name, Product.price, Product.regdate ).all()


def productone(db: Session, pno: int):
    return db.query(Product).filter(Product.pno == pno).first()
