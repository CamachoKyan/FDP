#Ejercicio #9
#Made By: Kyan Camacho
Data = input("Ingresa El Sueldo Diario - Días Trabajados - Horas Extras :\n").split()


Hours, Days, Extras = map(float, Data)

NormalPay = Hours / 8 

BasePay = Hours * Days

if Extras <= 20:
    HorasDobles = Extras
    HorasTriples = 0
else:
    HorasDobles = 20
    HorasTriples = Extras - 20

DoubleExtra = HorasDobles * NormalPay * 2
TripleExtra = HorasTriples * NormalPay * 3

Total = BasePay + DoubleExtra + TripleExtra

print(f"Sueldo Por Día: {NormalPay:.2f}, Sueldo Horas Extras Dobles: {DoubleExtra:.2f}, Sueldo Horas Extras Triples: {TripleExtra:.2f}, Total: {Total:.2f}")