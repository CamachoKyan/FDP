import java.util.Scanner;
/*Ejercicio #3
Made By: Kyan Camacho*/
class Main {
  public static void main(String[] args) {
    Scanner Input = new Scanner(System.in);
    System.out.println("Ingresa Un Primer Número:");
    int x = Input.nextInt();
    System.out.println("Ingresa Un Segundo Número:");
    int y = Input.nextInt();
    Input.close();
    
    if(x == y){
        System.out.println("Los Números Tienen El Mismo Valor");
    }else if (x>y){
        System.out.println("El Primer Número "+x+" Es Mayor Que El Segundo Número "+y);
    }else{
        System.out.println("El Primer Número "+x+" Es Menor Que El Segundo Número "+y);
    }
  }
}