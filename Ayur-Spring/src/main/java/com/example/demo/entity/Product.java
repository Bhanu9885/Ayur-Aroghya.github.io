package com.example.demo.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="product")

public class Product {

	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="image")
	private String image;
	
	@Column(name="drug")
	private String drug;
	
	@Column(name="mfg")
	private String mfg;
	
	@Column(name="mfgdate")
	private Date mfgdate;
	
	@Column(name="usebefore")
	private Date usebefore;
	
	@Column(name="mrp")
	private float mrp;
	
	@Column(name="discount")
	private int discount;
	
	@Column(name="quantity")
	private int quantity;
	
	@Column(name="cat_id")
	private int catId;
	
	
	@ManyToOne(targetEntity = Category.class,fetch = FetchType.EAGER)
	@JoinColumn(name="cat_id",insertable = false, updatable = false)
	private Category category;



	public Product() {}
	
	public Product(int id, String name, String image,String drug, String mfg, Date mfgdate,
			Date usebefore, float mrp, int discount,int quantity, int catId) {
		super();
		this.id = id;
		this.name = name;
		this.image = image;
		this.drug = drug;
		this.mfg = mfg;
		this.mfgdate = mfgdate;
		this.usebefore = usebefore;
		this.mrp = mrp;
		this.discount = discount;
		this.quantity = quantity ;
		this.catId=catId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDrug() {
		return drug;
	}

	public void setDrug(String drug) {
		this.drug = drug;
	}

	public String getMfg() {
		return mfg;
	}

	public void setMfg(String mfg) {
		this.mfg = mfg;
	}

	public Date getMfgdate() {
		return mfgdate;
	}

	public void setMfgdate(Date mfgdate) {
		this.mfgdate = mfgdate;
	}

	public Date getUsebefore() {
		return usebefore;
	}

	public void setUsebefore(Date usebefore) {
		this.usebefore = usebefore;
	}

	public float getMrp() {
		return mrp;
	}

	public void setMrp(float mrp) {
		this.mrp = mrp;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getCatId() {
		return catId;
	}

	public void setCatId(int catId) {
		this.catId = catId;
	}
	
	
	
}
