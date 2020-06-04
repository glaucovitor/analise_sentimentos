from datetime import datetime
from base import Session, engine, Base
from sqlalchemy.dialects import postgresql
from review import Review
from translate import concurrent_translate
from vader_analyze import vader_analyze
import time
import pandas as pd

CSV_PATH=''
Base.metadata.create_all(engine)
session = Session()
reviews_csv = pd.read_csv(CSV_PATH, na_filter = False)

for index, row in reviews_csv.iterrows():
    review = session.query(Review).get(row['id'])
    review.square_term = row['square_term'].lower()
    session.commit()
    print(f'review no {index} id {row["id"]}')
