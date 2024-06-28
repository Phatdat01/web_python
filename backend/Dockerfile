FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt requirements.txt

RUN apt-get update && apt-get install -y ffmpeg libsm6 libxext6 && rm -rf /var/lib/apt/lists/*

RUN pip3 install -r requirements.txt

COPY . /app

EXPOSE 5000

CMD ["uvicorn", "demo:app", "--reload", "--port", "5000"]