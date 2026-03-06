from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import SessionLocal
from app.analytics.analytics_engine import (
    get_average_engagement,
    get_average_consistency
)
from app.services.engagement_service import create_sample_engagements

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.get("/analytics")

def analytics(db: Session = Depends(get_db)):

    engagement = get_average_engagement(db)

    consistency = get_average_consistency(db)

    return {
        "average_engagement": engagement,
        "response_consistency": consistency
    }


@router.post("/analytics/seed")

def seed_sample_data(count: int = 10, db: Session = Depends(get_db)):
    """Create sample engagement data for testing"""
    
    engagements = create_sample_engagements(db, count)
    
    return {
        "message": f"Created {len(engagements)} sample engagement records",
        "count": len(engagements)
    }