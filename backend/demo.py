import mysql.connector

connection = mysql.connector.connect(
    user='root', password='123', host='mysql', port="3306", database='shop')
print("DB connected")

cursor = connection.cursor()
cursor.execute('Select * FROM shop_item')
students = cursor.fetchall()
print(students)
connection.close()