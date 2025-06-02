#Ejercicio #15
#Made By: Kyan Camacho
def MaxNum(x,y):
    Ans = x if x>y else y
    return Ans

First = input("Ingresa Un Primer Número:\n")
Second = input("Ingresa Un Segundo Número:\n")

print("\nEl Número Mayor Es:",MaxNum(First,Second))