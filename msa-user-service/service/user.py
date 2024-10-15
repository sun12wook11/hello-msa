from sqlalchemy.orm import Session

from schema.user import UserBase


def register(db:Session, user: UserBase):
    user = UserBase(**user.model_dump())
    db.add(user)
    db.commit()
    db.refresh(user)

    return UserBase.model_validate(user)