// package Week2_TDDusingJUnit5andMockito.Mockito_exercises.Exercise2_VerifyingInteractions.src.test.java.com.example;

// public class MyServiceTest {
    
// }

package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);  // Step 1: Mock
        MyService service = new MyService(mockApi);

        service.fetchData();                            // Step 2: Call method

        verify(mockApi).getData();                      // Step 3: Verify interaction
    }
}
