FROM python:3.7-alpine

WORKDIR /

# Pillow dependencies
RUN apk add zlib-dev jpeg-dev gcc musl-dev
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 8000

COPY . .
