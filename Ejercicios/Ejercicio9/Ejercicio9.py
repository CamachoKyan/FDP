#Ejercicio #9
#Made By: Kyan Camacho
Data = input("Ingresa El Sueldo Diario - Días Trabajados - Horas Extras :\n").split()


Hours, Days, Extras = map(float, Data)

NormalPay = Hours/Days

DoubleExtra = 0

TripleExtra = 0


Extra = NormalPay * Extras

DoubleExtra = Extra * 2

if Extras>20:
    TripleExtra = Extra * 3

Total = TripleExtra + DoubleExtra + (NormalPay*Days)

print(f"Sueldo Por Día: {NormalPay:.2f},\nSueldo Horas Extras Dobles: {DoubleExtra:.2f},\nSueldo Horas Extras Triples: {TripleExtra:.2f},\nTotal: {Total:.2f}")