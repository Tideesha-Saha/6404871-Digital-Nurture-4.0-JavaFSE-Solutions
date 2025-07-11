// package com.cognizant.ormlearn;

// import java.util.List;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.ApplicationContext;

// import com.cognizant.ormlearn.model.Country;
// import com.cognizant.ormlearn.service.CountryService;

// @SpringBootApplication
// public class OrmLearnApplication {

//     private static CountryService countryService;

//     private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

//     public static void main(String[] args) {
//         ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
//         LOGGER.info("Inside main");

//         countryService = context.getBean(CountryService.class);
//         testGetAllCountries();
//     }

//     private static void testGetAllCountries() {
//         LOGGER.info("Start");
//         List<Country> countries = countryService.getAllCountries();
//         LOGGER.debug("countries={}", countries);
//         LOGGER.info("End");
//     }
// }


// package com.cognizant.ormlearn;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
// public class OrmLearnApplication {
//     public static void main(String[] args) {
//         SpringApplication.run(OrmLearnApplication.class, args);
//     }
// }

package com.cognizant.ormlearn;

import java.util.List;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");

        countryService = context.getBean(CountryService.class);
        testGetAllCountries();  // 💡 This line is important
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);  // Will print to console if logging level is DEBUG
        LOGGER.info("End");
    }
}

