// package Week3_SpringCoreAndMaven.Exercise2_Implementing_Dependency_Injection.Code.LibraryManagementDI.src.main.java.com.library;

package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("Pather Panchali");
    }
}
