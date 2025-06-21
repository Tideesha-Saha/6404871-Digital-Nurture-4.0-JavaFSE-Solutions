package Week1_DesignPatternsAndPrinciples.Exercise2_FactoryMethodPatternExample.Code;
public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
