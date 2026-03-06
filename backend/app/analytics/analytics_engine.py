from sqlalchemy import func
from app.models.engagement_model import Engagement


def get_average_engagement(db):

    result = db.query(
        func.avg(Engagement.engagement_score)
    ).scalar()

    return result


def get_average_consistency(db):

    result = db.query(
        func.avg(Engagement.response_consistency)
    ).scalar()

    return result