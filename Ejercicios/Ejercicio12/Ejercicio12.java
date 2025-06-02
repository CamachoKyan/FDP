import java.util.Scanner;
/*Ejercicio #12
Made By: Kyan Camacho*/
public class Main
{
    public static void main(String[] args) {

        Scanner Input = new Scanner(System.in);
        int n=(int)(Math.random()*100)+1;
        System.out.println("Adivina El Número Entre El 1 Y 100");

        int Ans = -1;

        while(n!=Ans){
            Ans = Input.nextInt();
            if (n>Ans){
                System.out.println("Más");
            }else if (n<Ans){
                System.out.println("Menos");
            }else{
                System.out.println("Número adivinado: "+n);
                break;
            }
        }
    }
}