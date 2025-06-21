package Week1_DesignPatternsAndPrinciples.Exercise2_FactoryMethodPatternExample.Code;

public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}

