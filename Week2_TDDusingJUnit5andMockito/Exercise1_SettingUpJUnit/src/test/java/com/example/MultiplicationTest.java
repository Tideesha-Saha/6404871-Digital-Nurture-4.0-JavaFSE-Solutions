package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class MultiplicationTest {

    @Test
    public void testMultiply() {
        Multiplication calc = new Multiplication();
        assertEquals(36, calc.multiply(9, 4));
    }
}
