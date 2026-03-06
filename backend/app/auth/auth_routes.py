from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import timedelta
from pydantic import BaseModel

from app.core.database import SessionLocal
from app.core.config import settings
from app.auth.password_utils import hash_password, verify_password
from app.auth.jwt_handler import create_access_token, verify_token

router = APIRouter(prefix="/auth", tags=["Authentication"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")


class LoginRequest(BaseModel):
    username: str
    password: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/login")
async def login(credentials: LoginRequest):
    """Simple login endpoint - returns JWT token"""
    
    # Mock user validation - replace with database lookup
    if credentials.username == "demo" and credentials.password == "password":
        access_token = create_access_token(
            data={"sub": credentials.username},
            expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        )
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "username": credentials.username
        }
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect username or password"
    )


@router.post("/token")
async def login_form(form_data: OAuth2PasswordRequestForm = Depends()):
    """OAuth2 compatible login endpoint - returns JWT token"""
    
    # Mock user validation - replace with database lookup
    if form_data.username == "demo" and form_data.password == "password":
        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": form_data.username},
            expires_delta=access_token_expires
        )
        
        return {
            "access_token": access_token,
            "token_type": "bearer"
        }
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect username or password",
        headers={"WWW-Authenticate": "Bearer"},
    )


@router.get("/verify")
async def verify_token_endpoint(token: str = Depends(oauth2_scheme)):
    """Verify a JWT token"""
    
    username = verify_token(token)
    
    if username is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials"
        )
    
    return {"username": username, "valid": True}


@router.post("/hash-password")
async def hash_password_endpoint(password: str):
    """Utility endpoint to hash passwords for testing"""
    hashed = hash_password(password)
    return {"password": password, "hashed": hashed}
