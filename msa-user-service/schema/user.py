from pydantic import BaseModel


class User(BaseModel):
    userid: str
    passwd: str
    name: str
    email: str

