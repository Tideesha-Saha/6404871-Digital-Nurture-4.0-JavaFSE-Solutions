// package Week2_TDDusingJUnit5andMockito.Mockito_exercises.Exercise1_MockingAndStubbing.src.test.java.com.example;

// public class MyService {
    
// }


package com.example;

public class MyService {
    private final ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }
}

