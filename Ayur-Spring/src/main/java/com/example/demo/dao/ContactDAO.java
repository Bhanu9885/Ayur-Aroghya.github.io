package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Contact;

@RepositoryRestResource(path="contact")
@CrossOrigin("http://localhost:4200")

public interface ContactDAO extends JpaRepository<Contact, Integer> {

}
