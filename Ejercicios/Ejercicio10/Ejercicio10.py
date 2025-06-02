#Ejercicio #10
#Made By: Kyan Camacho
def GetNumber():
    Number = int(input("Escribe un número:\n"))

    print("El cuadrado de",Number,"Es:",pow(Number,2),"\n")

    if(Number>0):
        GetNumber()

GetNumber()