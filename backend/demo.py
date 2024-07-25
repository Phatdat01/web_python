import mysql.connector
from flask import Flask
import time 

app = Flask(__name__)

@app.route("/test_conn", methods=["GET","POST"])
def test_conn():
    connection = mysql.connector.connect(
        user='root', password='123', host='mysql', port="3306", database='shop')
    print("DB connected")

    cursor = connection.cursor()
    cursor.execute('Select * FROM shop_item')
    time.sleep(5)
    students = cursor.fetchall()
    print(students)
    # cursor.execute('Delete FROM shop_item where id="2"')
    # cursor.execute('Select * FROM shop_item')
    # students = cursor.fetchall( )

    print(students)
    # connection.close()
    return students

@app.route("/", methods=["GET","POST"])
def main():
    return {"message": "Hello World!"}

if __name__=="__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)