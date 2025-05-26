import math
#Ejercicio #2
#Made By: Kyan Camacho
def CalcPerim(Rad):
    Perimeter = 2 * math.pi * Rad
    return Perimeter

Radio = float(input("Ingresa El Radio Del Circulo:\n"))
print(f"El Perimetro Del Circulo Es: {CalcPerim(Radio):.2f}")