from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from app.core.database import Base

class Content(Base):

    __tablename__ = "content"

    id = Column(Integer, primary_key=True, index=True)
    
    title = Column(String, index=True)
    summary = Column(Text)
    content = Column(Text)
    
    topic = Column(String, index=True)
    audience = Column(String, index=True)
    tone = Column(String)
    
    category = Column(String, nullable=True)
    keywords = Column(String, nullable=True)
    
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    
    def __repr__(self):
        return f"<Content(id={self.id}, title='{self.title}', topic='{self.topic}')>"