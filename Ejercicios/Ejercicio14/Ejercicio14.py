#Ejercicio #14
#Made By: Kyan Camacho
NumStr = input("Ingresa 10 Números:\n").split(' ')

z=9
NumList = []
Output = ""
for n in range(5):
    NumList.append(NumStr[n])
    NumList.append(NumStr[z])
    z-=1

Output= " ".join(NumList)
print("El Nuevo Orden De Los Números Es:")
print(Output)