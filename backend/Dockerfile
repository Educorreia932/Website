FROM python:3.7-alpine

WORKDIR /

EXPOSE 8000

RUN apk add zlib-dev jpeg-dev gcc musl-dev python3-dev

# Install project dependencies
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy project files and folders to the current working directory
COPY . .

CMD ["uwsgi", "uwsgi.ini"]
