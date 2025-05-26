#Ejercicio #8
#Made By: Kyan Camacho
import datetime
def GetShowDays():
    Date = input("Ingresa Una Fecha Con El Formato Día Mes Año:\n").split()
    try:
        DD, MM, YYYY = map(int, Date)

        Day = datetime.datetime(YYYY, MM, DD)

        NextDay = Day + datetime.timedelta(days=1)

        print(NextDay.strftime("%d %m %Y"))
    except ValueError as e:
        print("\nFecha Invalida, Vuelve A Ingresar Una Fecha\n")
        GetShowDays()
        
GetShowDays()