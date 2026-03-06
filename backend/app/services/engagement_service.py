from app.models.engagement_model import Engagement
import random


def record_engagement(db, content_id, click_rate, score, consistency):

    item = Engagement(
        content_id=content_id,
        click_rate=click_rate,
        engagement_score=score,
        response_consistency=consistency
    )

    db.add(item)
    db.commit()


def create_sample_engagement(db, content_id: int):
    """Create sample engagement metrics for a piece of content"""
    
    engagement = Engagement(
        content_id=content_id,
        click_rate=round(random.uniform(0.05, 0.95), 2),
        engagement_score=round(random.uniform(0.3, 0.95), 2),
        response_consistency=round(random.uniform(0.5, 0.98), 2)
    )
    
    db.add(engagement)
    db.commit()
    db.refresh(engagement)
    
    return engagement


def create_sample_engagements(db, count: int = 10):
    """Create multiple sample engagement records"""
    
    engagements = []
    
    for i in range(1, count + 1):
        engagement = create_sample_engagement(db, content_id=i)
        engagements.append(engagement)
    
    return engagements