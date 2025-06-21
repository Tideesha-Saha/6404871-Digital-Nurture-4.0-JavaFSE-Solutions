package Week1_DSA_AlgorithmsDataStructure.Exercise2_EcommercePlatformSearchFunction.Code;

import java.util.*;
public class Ecommerce {
    public static void main(String[] args) {
        
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Keyboard", "Electronics"),
            new Product(3, "Jacket", "Fashion"),
            new Product(4, "Backpack", "Accessories"),
            new Product(5, "Watch", "Fashion"),
            new Product(6, "Headphones", "Electronics")
        };


        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Product to be searched: ");
        String searchTarget=sc.nextLine();

        System.out.println("\nProduct to be searched is: " +searchTarget);
        System.out.println("----------------------------");

        // Linear Search
        Product foundLinear = LinearSearch.linearSearch(products, searchTarget);
        
        System.out.println("\nLINEAR SEARCH RESULT:");
        if (foundLinear != null) {
            System.out.println("Product found! Product details are: \nProduct Id: "+ foundLinear.productId +"\nProduct Name: "+foundLinear.productName+ "\nCategory: "+foundLinear.category);
        } else {
            System.out.println("Product not found!");
        }

        // Binary Search
        Product foundBinary = BinarySearch.binarySearch(products, searchTarget);
        System.out.println("\nBINARY SEARCH RESULT:");
        if (foundBinary != null) {
             System.out.println("Product found! Product details are: \nProduct Id: "+ foundBinary.productId +"\nProduct Name: "+foundBinary.productName+ "\nCategory: "+foundBinary.category);
        } else {
            System.out.println("Product not found!");
        }

        sc.close();
    }
}