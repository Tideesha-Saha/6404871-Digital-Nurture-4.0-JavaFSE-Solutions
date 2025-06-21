package Week1_DesignPatternsAndPrinciples.Exercise2_FactoryMethodPatternExample.Code;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
