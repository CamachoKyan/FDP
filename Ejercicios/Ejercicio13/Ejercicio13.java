import java.util.Scanner;
/*Ejercicio #13
Made By: Kyan Camacho*/
public class Main
{
    public static void main(String[] args) {
        System.out.println("Ingresa 5 Números:");
        Scanner Input = new Scanner(System.in);
        int[] Numbers = {0,1,2,3,4};

        for(int i = 0;i<5;i++){
            int Ans = Input.nextInt();
            Numbers[i] = Ans;
        }
        for(int i=4;i>=0;i--){
            System.out.print(Numbers[i]+" ");
        }
    }
}