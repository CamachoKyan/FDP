import java.util.Scanner;
/*Ejercicio #1
Made By: Kyan Camacho*/
class Main {
  public static void main(String[] args) {
    Scanner Input = new Scanner(System.in);
    System.out.println("Ingresa El Radio Del Circulo:");
    float GetRadio = Input.nextFloat();
    Input.close();
    System.out.printf("El Área Del Circulo Es: %.2f\n", CircleArea(GetRadio));
  }
  public static float CircleArea(float Radio){
    float Area = (float)Math.PI * (float)Math.pow(Radio,2);
    return Area;
  }
}