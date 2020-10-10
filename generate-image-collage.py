#!/usr/bin/python

import requests
from PIL import Image
from io import BytesIO

STAMPS_DATA_PATH = "data/stamps.txt"

WIDTH = 1500
HEIGHT = 1500

MAXIMUM_WIDTH = 300
MAXIMUM_HEIGHT = 300

result = Image.new('RGB', (WIDTH, HEIGHT), color="white")

file = open(STAMPS_DATA_PATH, "r")

for line in file:
    line = line.split(" ")
    
    stamp_url = line[0]
    response = requests.get(stamp_url)
    
    line[1] = line[1].split(".")[0] 
    line[2] = line[2].split(".")[0] 
    
    try:
        stamp_image = Image.open(BytesIO(response.content))
        offset = (int(line[1]), int(line[2]))

    except:
        print(line)
        continue
    
    if (stamp_image.size[0] > MAXIMUM_WIDTH):
        percent = (float(MAXIMUM_WIDTH) / stamp_image.size[0])
        height = int((float(stamp_image.size[1]) * float(percent)))
        stamp_image = stamp_image.resize((MAXIMUM_WIDTH, height), Image.ANTIALIAS)
    
    if (stamp_image.size[1] > MAXIMUM_HEIGHT):
        percent = (float(MAXIMUM_HEIGHT) / stamp_image.size[1])
        width = int((float(stamp_image.size[0]) * float(percent)))
        stamp_image = stamp_image.resize((width, MAXIMUM_HEIGHT), Image.ANTIALIAS)
    
    result.paste(stamp_image, offset)
    
result.save("collage.png")