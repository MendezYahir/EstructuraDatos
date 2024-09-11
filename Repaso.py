import random
#Introduccion a python
"""
Este es un comentario
 de muchas lineas
"""
print("hola mundo")
x = 5
y = "John"
print(x)
print(y)
x = 1 #int
y = 2.8 #float
z = 1j  #complejo
#convertir de int a float
a = float (x)
#convertir de float a int
b = int (y)
#convertir de int a complejo
c = complex (z)
print (a)
print (b)
print (c)
print(type(a))
print(type(b))
print(type(c))
print(random.randrange(1, 10))
n = 0
while n < 5:
    n = n + 1
    print ('Hola mundo')
for i in (0,1,2,3,4,5,6,7,8,9,10):
    print(i, end=" ")
print("\n")
for i in range(10):
    print(i, end= " ")
print("\n")
for i in range(0,10):
    print(i, end= " ")
print("\n")
for i in range(-1, 10):
    print(i, end= " ")
print("\n")
for i in range(0,10,2):
    print(i, end= " ")
x = input("Captura un numero")
num = int(x)
if num > 1:
    print("Es positivo")
else :
    print("Es negativo")
x=5
y=6
if x<y:
    print("X es menor que Y")
elif x>y:
    print("X es mayor que Y")
else:
    print("X y Y son iguales")