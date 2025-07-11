// package Week3_SpringCoreAndMaven.Exercise2_Implementing_Dependency_Injection.Code.LibraryManagementDI.src.main.java.com.library.repository;

package com.library.repository;

public class BookRepository {
    public void saveBook(String bookName) {
        System.out.println("Saving book: " + bookName);
    }
}

