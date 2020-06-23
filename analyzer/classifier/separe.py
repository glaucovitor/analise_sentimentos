import numpy as np
import pandas as pd
import tensorflow as tf
import tensorflow_hub as hub

import matplotlib.pyplot as plt

df = pd.read_csv('./usability_reviews.csv', sep=',')
df_classified = df[df['square_term'].isnull() == False]
print(len(df_classified[df_classified['square_term'] == 1]))
print(len(df_classified[df_classified['square_term'] == 0]))