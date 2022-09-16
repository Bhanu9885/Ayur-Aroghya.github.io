package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cart")

public class Cart {

	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="image")
	private String image;
	
	@Column(name="name")
	private String name;

	@Column(name="mrp")
	private double mrp;

	@Column(name="discount")
	private int discount;
	
	public Cart() {}

	public Cart(int id, String image, String name, double mrp, int discount) {
		super();
		this.id = id;
		this.image = image;
		this.name = name;
		this.mrp = mrp;
		this.discount = discount;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getMrp() {
		return mrp;
	}

	public void setMrp(double mrp) {
		this.mrp = mrp;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}
	
	
}
