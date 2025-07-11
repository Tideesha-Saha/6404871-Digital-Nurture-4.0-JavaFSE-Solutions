package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange
        calculator = new Calculator();
        System.out.println("Setup complete.");
    }

    @After
    public void tearDown() {
        // Cleanup
        calculator = null;
        System.out.println("Teardown complete.");
    }

    @Test
    public void testAddPositiveNumbers() {
        // Act
        int result = calculator.sum(10, 5);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testAddNegativeNumbers() {
        int result = calculator.sum(-2, -3);
        assertEquals(-5, result);
    }
}
