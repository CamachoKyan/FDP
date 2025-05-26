#Ejercicio #6
#Made By: Kyan Camacho
def NumberSort():
    numbers = input("Ingresa 3 números separados por un espacio:\n").split()

    if len(numbers) != 3:
        print("Solo Tienes Que Ingresar 3 Números\n")
        NumberSort()
    else:
        numbers = [int(n) for n in numbers]

        numbers.sort(reverse=True)


        OutputNumbers = " ".join(str(x) for x in numbers)
        print(OutputNumbers)

NumberSort()