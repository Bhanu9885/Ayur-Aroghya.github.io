package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="contact")

public class Contact {

		@Id
		@Column(name="id")
		private int id;
		
		@Column(name="fname")
		private String fname;
		
		@Column(name="lname")
		private String lname;

		@Column(name="email")
		private String email;

		@Column(name="contact")
		private double contact;

		@Column(name="message")
		private String message;
		
public Contact() {}

public Contact(int id, String fname, String lname, String email, double contact, String message) {
	super();
	this.id = id;
	this.fname = fname;
	this.lname = lname;
	this.email = email;
	this.contact = contact;
	this.message = message;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getFname() {
	return fname;
}

public void setFname(String fname) {
	this.fname = fname;
}

public String getLname() {
	return lname;
}

public void setLname(String lname) {
	this.lname = lname;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public double getContact() {
	return contact;
}

public void setContact(double contact) {
	this.contact = contact;
}

public String getMessage() {
	return message;
}

public void setMessage(String message) {
	this.message = message;
}



}
