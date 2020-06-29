import csv
import requests
from bs4 import BeautifulSoup

url = "https://www.steamgriddb.com/search/grids?term="

with open("games.csv", encoding="utf-8") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')

    for row in csv_reader:
        name = row[0].lower().replace(" ", "+").replace("'", "").replace("/", "+")
        html = requests.get(url + name).text
        soup = BeautifulSoup(html, features="lxml")
        
        divs = soup.find_all("a", {"class": "dload"})
        
        image_url = divs[0].get("href")
        
        with open(name + ".jpg", 'wb') as handle:
                response = requests.get(image_url, stream=True)
        
                if not response.ok:
                    print(response)
        
                for block in response.iter_content(1024):
                    if not block:
                        break
                    
                    handle.write(block)