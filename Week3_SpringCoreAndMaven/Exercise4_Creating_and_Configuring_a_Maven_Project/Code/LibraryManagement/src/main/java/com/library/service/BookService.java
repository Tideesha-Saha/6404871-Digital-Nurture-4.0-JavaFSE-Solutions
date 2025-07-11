// package Week3_SpringCoreAndMaven.Exercise4_Creating_and_Configuring_a_Maven_Project.Code.LibraryManagement.src.main.java.com.library.service;

package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("Adding book: " + title);
        bookRepository.saveBook(title);
    }
}
