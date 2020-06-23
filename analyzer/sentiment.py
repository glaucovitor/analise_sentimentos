from datetime import datetime
from base import Session, engine, Base
from sqlalchemy.dialects import postgresql
from review import Review
from translate import concurrent_translate
from vader_analyze import vader_analyze
import time
from textblob import TextBlob
from sqlalchemy import and_

Base.metadata.create_all(engine)
session = Session()

reviews = session.query(Review).filter(and_(Review.app_id =='br.gov.meugovbr', Review.sentiment.is_(None))).all()
total = len(reviews)
print(f'Found: {total} unclassified reviews')
for i, review in enumerate(reviews):
    print(f'Starting review {review.id} - {i+1}/{total}')
    blob = TextBlob(review.text)
    try: 
        review.text_en = str(blob.translate(to='en'))
    except:
        print(f'Text not translated: {review.text}')
        review.text_en = review.text
    review.sentiment = vader_analyze(review.text_en)
    print(f'Sentiment is {review.sentiment}')    
    session.commit()
    time.sleep(0.2)
    print(f'Sleeping ZzZzzz')
