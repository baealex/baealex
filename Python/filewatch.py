import os
import time
import copy

files_watch = list()
temp_files_watch = list()

while True:
    is_changed = False
    for (path, dir, files) in os.walk(os.path.abspath('.')):
        for filename in files:
            files_watch.append(os.stat(path + '/' + filename).st_size)
    
    if len(set(files_watch) - set(temp_files_watch)) != 0:
        is_changed = True
    
    if is_changed:
        # Commend
    
    temp_files_watch = copy.deepcopy(files_watch)
    time.sleep(10)