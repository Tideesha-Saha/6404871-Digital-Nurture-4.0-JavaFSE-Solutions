package Week1_DesignPatternsAndPrinciples.Exercise2_FactoryMethodPatternExample.Code;

public class WordDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening a Word Document...");
    }
}
