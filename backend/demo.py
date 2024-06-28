import uvicorn
import mysql.connector
from fastapi import FastAPI

app = FastAPI()

@app.api_route("/test_conn", methods=["GET","POST"])
async def test_conn():
    connection = mysql.connector.connect(
        user='root', password='123', host='mysql', port="3306", database='shop')
    print("DB connected")

    cursor = connection.cursor()
    cursor.execute('Select * FROM shop_item')
    students = cursor.fetchall()
    print(students)
    cursor.execute('Delete FROM shop_item where id="2"')
    cursor.execute('Select * FROM shop_item')
    students = cursor.fetchall()
    print(students)
    connection.close()
    return students

@app.api_route("/", methods=["GET","POST"])
async def main():
    return "Hello World!"

if __name__ == "__main__":
    uvicorn.run("demo:app", port=5000, reload=True)