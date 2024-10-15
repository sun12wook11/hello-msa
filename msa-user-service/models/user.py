from datetime import datetime

from sqlalchemy import Column, INTEGER, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    mno = Column(INTEGER, primary_key=True, autoincrement=True, index=True)
    userid = Column(String(18), nullable=False)
    passwd = Column(String(128), nullable=False)
    name = Column(String(18), nullable=False)
    email = Column(String(18), nullable=False)
    regdate = Column(String(20), default=datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
