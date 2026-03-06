"""Initialize database tables"""
from app.core.database import Base, engine
from app.models.content_model import Content

def init_db():
    """Create all database tables"""
    Base.metadata.create_all(bind=engine)
    print("✓ Database tables created successfully")

if __name__ == "__main__":
    init_db()
