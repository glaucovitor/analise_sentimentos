from datetime import datetime
from base import Session, engine, Base
from sqlalchemy.dialects import postgresql
from review import Review
import time
from sqlalchemy import and_
from sqlalchemy.orm import load_only
import csv

Base.metadata.create_all(engine)
session = Session()

keys = ['id', 'square_term', 'sentiment', 'text']
reviews = session.query(Review).filter(Review.app_id =='br.gov.meugovbr').options(load_only('id', 'square_term', 'sentiment', 'text')).all()
total = len(reviews)
print(f'Found: {total} unclassified reviews')

revs = []

for review in reviews:
    if review.square_term is not None:    
        review.square_term = 1 if review.square_term == 'usabillity' else 0
    revs.append(review) 

f = open('usability_reviews.csv', 'w')
out = csv.writer(f)
out.writerow(keys)
for item in revs:
    out.writerow([item.id, item.square_term, item.sentiment, item.text])
f.close()
