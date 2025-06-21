package Week1_DSA_AlgorithmsDataStructure.Exercise2_EcommercePlatformSearchFunction.Code;


public class LinearSearch {
    public static Product linearSearch(Product[] products, String target) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(target)) {
                return product;  // Product found
            }
        }
        return null;  // Product not found
    }
}
