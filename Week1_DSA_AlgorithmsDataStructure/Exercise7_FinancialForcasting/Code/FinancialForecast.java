package Week1_DSA_AlgorithmsDataStructure.Exercise7_FinancialForcasting.Code;

import java.util.Scanner;

public class FinancialForecast {

    // Recursive method
    public static double forecastRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return forecastRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter present value (Rs.): ");
        double presentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate: (%) ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter number of years to forecast: ");
        int years = sc.nextInt();

        // Recursive forecast
        double futureValueRecursive = forecastRecursive(presentValue, (growthRate/100), years);
        System.out.printf("\n[Recursive] Future value after %d years = Rs. %.2f%n", years, futureValueRecursive);

        // Iterative forecast
        // double futureValueIterative = forecastIterative(presentValue, growthRate, years);
        // System.out.printf("[Iterative] Future value after %d years = ₹%.2f%n", years, futureValueIterative);

        sc.close();
    }
}
