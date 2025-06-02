import java.util.Scanner;
/*Ejercicio #1
Made By: Kyan Camacho*/
public class Main
{
    public static void main(String[] args) {
        NumberG();
    }

    public static void NumberG(){
        System.out.println("Ingresa Un Número:");
        Scanner Input = new Scanner(System.in);
        int Num = Input.nextInt();

        if((Num!=0)){
            if (Num % 2 ==0){
                System.out.println("El Número Es Par \n");
            }else{
                System.out.println("El Número Es Impar \n");
            }
            NumberG();
        }else{
           System.out.println("Es Cero");
        }
    }
}