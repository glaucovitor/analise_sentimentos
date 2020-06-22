from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def vader_analyze(text):
    analyzer = SentimentIntensityAnalyzer()
    polarity = analyzer.polarity_scores(text)
    sent = None
    if polarity['compound'] >= 0.05:
        sent = 'positive'
    if (polarity['compound'] > -0.05) and (polarity['compound'] < 0.05):
        sent = 'neutral'
    if polarity['compound'] <= -0.05:
        sent = 'negative'
    return sent