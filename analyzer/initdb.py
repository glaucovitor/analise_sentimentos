from datetime import datetime
from base import Session, engine, Base
from sqlalchemy.dialects import postgresql
from app import App
from review import Review
import bson

Base.metadata.create_all(engine)
