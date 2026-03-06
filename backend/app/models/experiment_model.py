from sqlalchemy import Column, Integer, String
from app.core.database import Base

class Experiment(Base):

    __tablename__ = "experiments"

    id = Column(Integer, primary_key=True)

    prompt_a = Column(String)

    prompt_b = Column(String)

    winner = Column(String)