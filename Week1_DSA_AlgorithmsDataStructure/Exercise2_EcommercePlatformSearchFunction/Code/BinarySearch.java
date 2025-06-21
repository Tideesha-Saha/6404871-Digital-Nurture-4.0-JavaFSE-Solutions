package Week1_DSA_AlgorithmsDataStructure.Exercise2_EcommercePlatformSearchFunction.Code;


import java.util.*;
public class BinarySearch {
    public static Product binarySearch(Product[] products, String targetName) {
        // Array is sorted by productName
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = targetName.compareToIgnoreCase(products[mid].productName);

            if (cmp == 0) {
                return products[mid];  // found
            } else if (cmp < 0) {
                right = mid - 1;  // search left half
            } else {
                left = mid + 1;  // search right half
            }
        }
        return null;  // not found
    }
}
