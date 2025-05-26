import java.util.Scanner;
/*Ejercicio #7
Made By: Kyan Camacho*/
public class Main
{
    public static void main(String[] args) {
        Scanner Input = new Scanner(System.in);
        System.out.println("Escribe La Calificación:");
        int Cal = Input.nextInt();
        Input.close();
        if(Cal>7 && (!(Cal>10))){
            System.out.println("Calificación Bien");
        }else if (Cal==7){
            System.out.println("Calificación Suficiente");
        }else if (Cal<7 && !(Cal<0)){
            System.out.println("Calificación Insuficiente");
        }else{
            System.out.println("Calificación No Valida");
        };
    }
}