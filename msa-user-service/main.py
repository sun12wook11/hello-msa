import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from routes import user
from service.database import create_tables

app = FastAPI()

# CORS 설정
origins = [
    "http://localhost:3000",  # 허용할 프론트엔드 도메인
    "http://127.0.0.1:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 라우터 추가
app.include_router(user.router)



if __name__ == "__main__":
    create_tables()
    uvicorn.run('main:app', port=8000, reload=True)
