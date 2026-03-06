from sqlalchemy import Column, Integer, Float
from app.core.database import Base

class Engagement(Base):

    __tablename__ = "engagement"

    id = Column(Integer, primary_key=True, index=True)

    content_id = Column(Integer)

    click_rate = Column(Float)

    engagement_score = Column(Float)

    response_consistency = Column(Float)
