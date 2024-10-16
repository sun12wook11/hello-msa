from pydantic import BaseModel

class ProductBase(BaseModel):
    name: str
    desc: str
    price: float
    maker: str
    regdate: str

class Product(ProductBase):
    pno: int

    class Config:
        from_attribute=True

class ProductList(BaseModel):
    pno: int
    name: str
    price: float
    regdate: str

    class Config:
        from_attributes=True