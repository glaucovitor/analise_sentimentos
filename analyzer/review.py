from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Date, Text, Float
from base import Base

class Review(Base):
    __tablename__ = 'reviews'
    id = Column(String, primary_key=True)
    title = Column(String)
    text = Column(Text)
    user_name = Column(String)
    date = Column(Date)
    score = Column(Float)
    url = Column(String)
    reply_date = Column(Date)
    reply_text = Column(Text)
    version = Column(String)
    thumbs_up = Column(Integer)
    app_id = Column(String)
    sentiment = Column(String)
    square_term = Column(String)
    text_en = Column(String)

    def __init__(self, **kwargs):
        self.id = kwargs.get('id')
        self.title = kwargs.get('title')
        self.text = kwargs.get('text')
        self.user_name = kwargs.get('user_name') 
        self.date = kwargs.get('date')
        self.score = kwargs.get('score')
        self.url = kwargs.get(' url')
        self.reply_date = kwargs.get('reply_date')
        self.reply_text = kwargs.get('reply_text')
        self.version = kwargs.get('version')
        self.thumbs_up = kwargs.get('thumbs_up')
        self.app_id = kwargs.get('app_id')
        self.sentiment = kwargs.get('sentiment')
        self.square_term = kwargs.get('square_term')
        self.text_en = kwargs.get('text_en')