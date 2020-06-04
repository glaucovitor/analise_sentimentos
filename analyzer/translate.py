import goslate
import concurrent.futures

def concurrent_translate(data):
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=200)
    gs = goslate.Goslate(executor=executor)
    translated = gs.translate(data, 'en')
    return list(translated)